// ─── Navbar ───
export function initNavbar() {
  const nav  = document.getElementById('navbar');
  const btn  = document.getElementById('hamburger');
  const menu = nav?.querySelector('.navbar__links');
  if (!nav) return;

  // Clase scrolled al hacer scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger mobile
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Cerrar al hacer clic en un enlace
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
