import { useState, useEffect } from 'react';

interface MediumStats {
  claps: number;
  comments?: number;
}

export function useMediumStats(postId: string, defaultClaps: number = 0) {
  const liveMode = process.env.NEXT_PUBLIC_MEDIUM_STATS_LIVE === 'true';
  const shouldFetchLive = Boolean(postId) && liveMode && defaultClaps === 0;
  const [stats, setStats] = useState<MediumStats>({ claps: defaultClaps });
  const [loading, setLoading] = useState(shouldFetchLive);

  useEffect(() => {
    if (!postId || !shouldFetchLive) {
      setStats({ claps: defaultClaps });
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/medium-stats?postId=${postId}`, {
          signal: AbortSignal.timeout(1500),
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch stats: ${response.status}`);
        }
        
        const data = await response.json();
        if (isMounted) {
          setStats(data);
        }
      } catch (error) {
        if (isMounted) {
          setStats({ claps: defaultClaps });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Fetch on component mount and page refresh
    fetchStats();

    return () => {
      isMounted = false;
    };
  }, [postId, defaultClaps, shouldFetchLive]);

  return { stats, loading };
}