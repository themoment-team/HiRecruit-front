import { useEffect, useState } from 'react';

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(
    (typeof window !== 'undefined' && window.pageYOffset) || 0,
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll.bind(this));
    return () => {
      window.removeEventListener('scroll', onScroll.bind(this));
    };
  }, []);

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  return scrollPosition;
};
