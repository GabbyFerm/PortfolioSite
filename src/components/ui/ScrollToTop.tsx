import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top of the page whenever the route changes.
// This is a known gap in React Router — it doesn't handle scroll
// position automatically, so we do it ourselves.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  // Renders nothing — this is purely a behaviour component
  return null;
}
