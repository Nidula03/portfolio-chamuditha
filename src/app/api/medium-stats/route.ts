import { NextResponse } from 'next/server';

interface CacheEntry {
  claps: number;
  timestamp: number;
}

// In-memory cache with 2 minutes TTL for faster updates
const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 2 * 60 * 1000; // 2 minutes

// Fallback clap counts
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

    // Try to fetch from Medium's public API endpoint
    try {
      const mediumUrl = `https://medium.com/@chamudithasawan/${postId}`;
      const response = await fetch(mediumUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      if (response.ok) {
        const html = await response.text();
        
        // Try to extract clap count from the HTML
        const clapMatch = html.match(/"clapCount":(\d+)/);
        if (clapMatch && clapMatch[1]) {
          const claps = parseInt(clapMatch[1], 10);
          console.log(`[Medium Scrape] Post ${postId}: ${claps} claps`);
          const entry = { claps, timestamp: Date.now() };
          cache.set(postId, entry);
          return entry;
        }
      }
    } catch (fetchError) {
      console.log(`[Medium Fetch Failed]`, fetchError);
    }

    // Fallback to static values if fetching fails
    const fallbackClaps = FALLBACK_CLAPS[postId] || 0;
    console.log(`[Using Fallback] Post ${postId}: ${fallbackClaps} claps`);
    
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
      'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=240',
    },
  });
}
