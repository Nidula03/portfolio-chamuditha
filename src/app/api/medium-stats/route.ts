import { NextResponse } from 'next/server';

// Fallback clap counts
const FALLBACK_CLAPS: Record<string, number> = {
  '8c15c04d1f3c': 51,      // Beyond the Pedals
  '65d87079d742': 50,      // Ink, Mud and Memories
  '218197818958': 57,      // Blind on the Summit
};

interface MediumPostData {
  id: string;
  title: string;
  clappedCount: number;
  createdAt: number;
  updatedAt: number;
}

async function fetchMediumStats(postId: string): Promise<{ claps: number; timestamp: number }> {
  try {
    // Method 1: Try the direct API endpoint
    const apiUrl = `https://medium.com/api/posts/${postId}`;
    
    console.log(`[Fetching] ${new Date().toISOString()} - ${apiUrl}`);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://medium.com/',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
      },
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (response.ok) {
      const data: MediumPostData = await response.json();
      
      if (data.clappedCount !== undefined) {
        const claps = data.clappedCount;
        console.log(`[SUCCESS] Post ${postId}: ${claps} claps`);
        return { claps, timestamp: Date.now() };
      }
    } else {
      console.log(`[HTTP ${response.status}] Failed to fetch from ${apiUrl}`);
    }
  } catch (error) {
    console.log(`[Error] ${error instanceof Error ? error.message : String(error)}`);
  }

  // Try Method 2: GraphQL API endpoint as fallback
  try {
    console.log(`[Trying GraphQL] ${new Date().toISOString()}`);
    
    const graphqlUrl = 'https://medium.com/_/graphql';
    
    const graphqlQuery = {
      operationName: 'GetPost',
      variables: {
        postId: postId,
      },
      query: `
        query GetPost($postId: ID!) {
          post(id: $postId) {
            id
            title
            clapCount
          }
        }
      `,
    };

    const response = await fetch(graphqlUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Origin': 'https://medium.com',
        'Referer': 'https://medium.com/',
      },
      cache: 'no-store',
      next: { revalidate: 0 },
      body: JSON.stringify(graphqlQuery),
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.data?.post?.clapCount !== undefined) {
        const claps = data.data.post.clapCount;
        console.log(`[GraphQL SUCCESS] Post ${postId}: ${claps} claps`);
        return { claps, timestamp: Date.now() };
      }
    }
  } catch (error) {
    console.log(`[GraphQL Error] ${error instanceof Error ? error.message : String(error)}`);
  }

  // Fallback to static values
  const claps = FALLBACK_CLAPS[postId] || 0;
  console.log(`[Fallback] Post ${postId}: ${claps} claps`);
  return { claps, timestamp: Date.now() };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json(
      { error: 'postId query parameter is required' },
      { status: 400 }
    );
  }

  const stats = await fetchMediumStats(postId);

  return NextResponse.json(stats, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Accel-Expires': '0',
    },
  });
}