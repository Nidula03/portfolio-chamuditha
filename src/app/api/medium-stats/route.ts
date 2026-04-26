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
  // In development, skip the network calls entirely — they always time out
  // and just heat up your machine waiting for Medium to block you.
  if (process.env.NODE_ENV === 'development') {
    const claps = FALLBACK_CLAPS[postId] || 0;
    console.log(`[DEV] Skipping Medium API — using fallback: ${claps} claps for ${postId}`);
    return { claps, timestamp: Date.now() };
  }
 
  // Use AbortController to enforce a 5-second timeout on each attempt
  const withTimeout = (ms: number) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), ms);
    return { signal: controller.signal, clear: () => clearTimeout(id) };
  };
 
  // Method 1: Try the direct REST API endpoint
  try {
    const { signal, clear } = withTimeout(5000);
    const apiUrl = `https://medium.com/api/posts/${postId}`;
 
    const response = await fetch(apiUrl, {
      method: 'GET',
      signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://medium.com/',
      },
      // Cache for 1 hour on the server — no need to hit Medium on every request
      next: { revalidate: 3600 },
    });
    clear();
 
    if (response.ok) {
      const data: MediumPostData = await response.json();
      if (data.clappedCount !== undefined) {
        console.log(`[SUCCESS] Post ${postId}: ${data.clappedCount} claps`);
        return { claps: data.clappedCount, timestamp: Date.now() };
      }
    } else {
      console.log(`[HTTP ${response.status}] REST API failed for ${postId}`);
    }
  } catch (error) {
    console.log(`[REST Error] ${error instanceof Error ? error.message : String(error)}`);
  }
 
  // Method 2: GraphQL fallback (also with timeout)
  try {
    const { signal, clear } = withTimeout(5000);
    const graphqlUrl = 'https://medium.com/_/graphql';
 
    const graphqlQuery = {
      operationName: 'GetPost',
      variables: { postId },
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
      signal,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Origin': 'https://medium.com',
        'Referer': 'https://medium.com/',
      },
      next: { revalidate: 3600 },
      body: JSON.stringify(graphqlQuery),
    });
    clear();
 
    if (response.ok) {
      const data = await response.json();
      if (data.data?.post?.clapCount !== undefined) {
        console.log(`[GraphQL SUCCESS] Post ${postId}: ${data.data.post.clapCount} claps`);
        return { claps: data.data.post.clapCount, timestamp: Date.now() };
      }
    }
  } catch (error) {
    console.log(`[GraphQL Error] ${error instanceof Error ? error.message : String(error)}`);
  }
 
  // Final fallback to static values
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
      // Cache the response in the browser for 1 hour in production
      'Cache-Control': process.env.NODE_ENV === 'development'
        ? 'no-store'
        : 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}