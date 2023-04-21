import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import type { Size } from './app.def';

export const useMounting = () => {
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return hasMounted;
};

export const useWindowUtils = () => {
  const [scrollPosition, setScrollPosition] = useState<number | undefined>(
    undefined,
  );
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { scrollPosition, size };
};

export const useElementUtils = (ref: RefObject<HTMLElement>) => {
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (ref.current !== null) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  return { size };
};

export const useIntersectionObserver = (ref: RefObject<HTMLElement>) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [isInView, setInView] = useState(false);
  const [hasBeenViewed, setBeenViewed] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);

      if (entry.isIntersecting) {
        setBeenViewed(true);
      }
    });
  }, []);

  useEffect(() => {
    if (ref.current !== null && observerRef.current !== null) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current !== null) {
        observerRef.current.disconnect();
      }
    };
  }, [ref]);

  return { isInView, hasBeenViewed };
};
