// ─── Entry point ───
import { initLoader }    from './js/loader.js';
import { initCursor }    from './js/cursor.js';
import { initNavbar }    from './js/navbar.js';
import { initHero }      from './js/hero.js';
import { initScroll }    from './js/scroll.js';
import { initStats }     from './js/stats.js';
import { initProyectos } from './js/proyectos.js';
import { initForm }      from './js/form.js';

// Cursor arranca inmediato (no espera DOMContentLoaded)
initCursor();

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScroll();
  initStats();
  initProyectos();
  initForm();

  // Hero se activa tras el loader
  initLoader(() => {
    initHero();
  });
});
