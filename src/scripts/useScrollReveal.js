import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.service-item, .blog-post-item, .timeline-item, .content-card, .clients-item, .contact-item'
    );

    const parentMap = new Map();
    targets.forEach(el => {
      const p = el.parentElement;
      if (!parentMap.has(p)) parentMap.set(p, []);
      parentMap.get(p).push(el);
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach(el => {
      const siblings = parentMap.get(el.parentElement);
      const idx = siblings.indexOf(el);
      el.classList.add('reveal');
      el.style.transitionDelay = `${idx * 0.07}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}
