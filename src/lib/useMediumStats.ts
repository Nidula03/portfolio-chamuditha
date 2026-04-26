import { useState, useEffect } from 'react';
 
interface MediumStats {
  claps: number;
  comments?: number;
}
 
// Module-level cache — persists for the lifetime of the browser session.
// This means navigating away and back won't trigger a re-fetch.
const statsCache = new Map<string, MediumStats>();
 
export function useMediumStats(postId: string, defaultClaps: number = 0) {
  const cached = statsCache.get(postId);
  const [stats, setStats] = useState<MediumStats>(cached ?? { claps: defaultClaps });
  const [loading, setLoading] = useState(!cached && !!postId);
 
  useEffect(() => {
    // Already cached from a previous render — nothing to do
    if (!postId || statsCache.has(postId)) {
      return;
    }
 
    let isMounted = true;
 
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/medium-stats?postId=${postId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch stats: ${response.status}`);
        }
 
        const data: MediumStats = await response.json();
 
        // Save to module-level cache so subsequent renders skip the fetch
        statsCache.set(postId, data);
 
        if (isMounted) {
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching medium stats:', error);
        // Cache the fallback too so we don't retry on every render
        const fallback = { claps: defaultClaps };
        statsCache.set(postId, fallback);
        if (isMounted) {
          setStats(fallback);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
 
    fetchStats();
 
    return () => {
      isMounted = false;
    };
  }, [postId, defaultClaps]);
 
  return { stats, loading };
}
 