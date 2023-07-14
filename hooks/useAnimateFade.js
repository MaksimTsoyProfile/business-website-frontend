import { useEffect } from 'react';

let observer;

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
    }
  });
};

export default (ref) => {
  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(intersectionCallback, {
        threshold: [0]
      });
    }
    observer.observe(ref.current);
  }, [ref]);
};
