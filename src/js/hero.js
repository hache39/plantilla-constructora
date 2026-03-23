// ─── Hero reveal + parallax ───
export function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Reveal tras loader
  hero.classList.add('is-ready');

  // Parallax suave en la imagen del hero
  const img = hero.querySelector('.hero__img');
  if (!img) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      // Sólo aplica si el hero es visible
      if (scrollY < window.innerHeight) {
        img.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}
