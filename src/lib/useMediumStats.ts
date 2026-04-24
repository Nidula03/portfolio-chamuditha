import { useState, useEffect } from 'react';

interface MediumStats {
  claps: number;
  comments?: number;
}

export function useMediumStats(postId: string, defaultClaps: number = 0) {
  const [stats, setStats] = useState<MediumStats>({ claps: defaultClaps });
  const [loading, setLoading] = useState(!!postId);

  useEffect(() => {
    if (!postId) {
      return;
    }

    let isMounted = true;

    const fetchStats = async () => {
      try {
        console.log(`Fetching stats for post: ${postId}`);
        const response = await fetch(`/api/medium-stats?postId=${postId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch stats: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Got stats:`, data);
        if (isMounted) {
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching medium stats:', error);
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
  }, [postId, defaultClaps]);

  return { stats, loading };
}
