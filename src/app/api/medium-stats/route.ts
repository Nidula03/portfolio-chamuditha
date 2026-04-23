import { NextResponse } from 'next/server';

interface CacheEntry {
  claps: number;
  timestamp: number;
}

// In-memory cache with 30 minutes TTL
const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

// Fallback clap counts - these are updated manually as reference values
const FALLBACK_CLAPS: Record<string, number> = {
  '8c15c04d1f3c': 51,      // Beyond the Pedals
  '65d87079d742': 50,      // Ink, Mud and Memories
  '218197818958': 57,      // Blind on the Summit
};

async function fetchMediumStats(postId: string) {
  try {
    // Check cache first
    const cached = cache.get(postId);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log(`[Cache HIT] Post ${postId}: ${cached.claps} claps`);
      return cached;
    }

    // Get fallback value
    const fallbackClaps = FALLBACK_CLAPS[postId] || 0;
    console.log(`[Using Fallback] Post ${postId}: ${fallbackClaps} claps`);
    
    // Return fallback with current timestamp
    const entry = { claps: fallbackClaps, timestamp: Date.now() };
    cache.set(postId, entry);
    return entry;
    
  } catch (error) {
    console.error('Error in fetchMediumStats:', error);
    const fallbackClaps = FALLBACK_CLAPS[postId] || 51;
    return { claps: fallbackClaps, timestamp: Date.now() };
  }
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
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });
}
