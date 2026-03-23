// ─── Navbar ───
export function initNavbar() {
  const nav         = document.getElementById('navbar');
  const btn         = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const closeBtn    = document.getElementById('mobileMenuClose');
  if (!nav) return;

  // Clase scrolled al hacer scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger mobile
  if (!btn || !mobileMenu) return;

  let scrollY = 0;

  function lockScroll() {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top      = `-${scrollY}px`;
    document.body.style.width    = '100%';
  }

  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top      = '';
    document.body.style.width    = '';
    window.scrollTo(0, scrollY);
  }

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    lockScroll();
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    unlockScroll();
  }

  btn.addEventListener('click', () => {
    btn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  // Cerrar con el botón X
  if (closeBtn) closeBtn.addEventListener('click', () => closeMenu());

  // Cerrar al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });
}
