import { NextResponse } from 'next/server';

const clapCache = new Map<string, { claps: number; timestamp: number }>();
const CACHE_DURATION = 10 * 60 * 1000;
const LIVE_MODE = process.env.MEDIUM_STATS_LIVE === 'true';

// Fallback clap counts
const FALLBACK_CLAPS: Record<string, number> = {
  '95186def2eb8': 51,      // From 4 Hours to 1 Minute
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
  const cached = clapCache.get(postId);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached;
  }

  try {
    const apiUrl = `https://medium.com/api/posts/${postId}`;

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
      signal: AbortSignal.timeout(1200),
    });

    if (response.ok) {
      const data: MediumPostData = await response.json();
      
      if (data.clappedCount !== undefined) {
        const result = { claps: data.clappedCount, timestamp: Date.now() };
        clapCache.set(postId, result);
        return result;
      }
    }
  } catch {
    // Ignore and try fallback method.
  }

  try {
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
      signal: AbortSignal.timeout(1200),
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.data?.post?.clapCount !== undefined) {
        const result = { claps: data.data.post.clapCount, timestamp: Date.now() };
        clapCache.set(postId, result);
        return result;
      }
    }
  } catch {
    // Ignore and use static fallback.
  }

  const fallback = { claps: FALLBACK_CLAPS[postId] || 0, timestamp: Date.now() };
  clapCache.set(postId, fallback);
  return fallback;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const forceLive = searchParams.get('live') === '1';

  if (!postId) {
    return NextResponse.json(
      { error: 'postId query parameter is required' },
      { status: 400 }
    );
  }

  let stats: { claps: number; timestamp: number };
  if (LIVE_MODE || forceLive) {
    stats = await fetchMediumStats(postId);
  } else {
    const cached = clapCache.get(postId);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      stats = cached;
    } else {
      const fallback = { claps: FALLBACK_CLAPS[postId] || 0, timestamp: Date.now() };
      clapCache.set(postId, fallback);
      stats = fallback;
    }
  }

  return NextResponse.json(stats, {
    headers: {
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
    },
  });
}