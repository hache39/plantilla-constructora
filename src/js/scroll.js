// ─── Scroll reveal ───
export function initScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Delay escalonado para elementos en grupo
        const delay = entry.target.dataset.delay || (i * 80);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(Number(delay), 400));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}
