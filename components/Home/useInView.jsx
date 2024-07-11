import { useState, useEffect } from 'react';

const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting);
      }, options);

      observer.observe(ref);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return [setRef, inView];
};

export default useInView;
