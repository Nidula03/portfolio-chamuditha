'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Enable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    // Store scroll position before navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPos', window.scrollY.toString());
    };

    // Restore scroll position when returning
    const handlePopState = () => {
      const scrollPos = sessionStorage.getItem('scrollPos');
      if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos, 10));
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    // Restore scroll on page load if returning from another page
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos && parseInt(scrollPos, 10) > 0) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPos, 10));
      }, 0);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}
