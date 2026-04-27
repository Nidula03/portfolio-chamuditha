import { NextResponse } from 'next/server';

const clapCache = new Map<string, { claps: number; timestamp: number }>();
const CACHE_DURATION = 30 * 60 * 1000;
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
    console.log(`[Medium Stats] Cache hit for ${postId}: ${cached.claps} claps`);
    return cached;
  }

  console.log(`[Medium Stats] Fetching live stats for ${postId}...`);

  try {
    const apiUrl = `https://medium.com/api/posts/${postId}`;
    console.log(`[Medium Stats] Trying REST API: ${apiUrl}`);

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
      console.log(`[Medium Stats] REST API response for ${postId}:`, data);
      
      if (data.clappedCount !== undefined) {
        const result = { claps: data.clappedCount, timestamp: Date.now() };
        clapCache.set(postId, result);
        console.log(`[Medium Stats] SUCCESS - Cached ${data.clappedCount} claps`);
        return result;
      }
    } else {
      console.log(`[Medium Stats] REST API failed with status ${response.status}`);
    }
  } catch {
    console.log(`[Medium Stats] REST API fetch error, trying GraphQL...`);
  }

  try {
    const graphqlUrl = 'https://medium.com/_/graphql';
    console.log(`[Medium Stats] Trying GraphQL endpoint...`);
    
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
      next: { revalidate: 0 },
      body: JSON.stringify(graphqlQuery),
      signal: AbortSignal.timeout(1200),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(`[Medium Stats] GraphQL response for ${postId}:`, data);
      
      if (data.data?.post?.clapCount !== undefined) {
        const result = { claps: data.data.post.clapCount, timestamp: Date.now() };
        clapCache.set(postId, result);
        console.log(`[Medium Stats] SUCCESS via GraphQL - Cached ${data.data.post.clapCount} claps`);
        return result;
      }
    } else {
      console.log(`[Medium Stats] GraphQL failed with status ${response.status}`);
    }
  } catch {
    console.log(`[Medium Stats] GraphQL fetch error, using fallback...`);
  }

  const fallback = { claps: FALLBACK_CLAPS[postId] || 0, timestamp: Date.now() };
  clapCache.set(postId, fallback);
  console.log(`[Medium Stats] Using fallback for ${postId}: ${fallback.claps} claps`);
  return fallback;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const forceLive = searchParams.get('live') === '1';

  console.log(`[Medium Stats API] Request - postId: ${postId}, LIVE_MODE: ${LIVE_MODE}, forceLive: ${forceLive}`);

  if (!postId) {
    return NextResponse.json(
      { error: 'postId query parameter is required' },
      { status: 400 }
    );
  }

  let stats: { claps: number; timestamp: number };
  if (LIVE_MODE || forceLive) {
    console.log(`[Medium Stats API] Fetching live stats...`);
    stats = await fetchMediumStats(postId);
  } else {
    console.log(`[Medium Stats API] LIVE_MODE disabled, checking cache...`);
    const cached = clapCache.get(postId);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      stats = cached;
    } else {
      const fallback = { claps: FALLBACK_CLAPS[postId] || 0, timestamp: Date.now() };
      clapCache.set(postId, fallback);
      stats = fallback;
    }
  }

  console.log(`[Medium Stats API] Returning ${stats.claps} claps for ${postId}`);
  return NextResponse.json(stats, {
    headers: {
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
    },
  });
}