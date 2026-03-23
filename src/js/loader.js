// ─── Loader ───
export function initLoader(onComplete) {
  const loader = document.getElementById('loader');
  if (!loader) { onComplete?.(); return; }

  const TIMEOUT = 3000;

  function hide() {
    loader.classList.add('hidden');
    onComplete?.();
  }

  // Esperar a que la página cargue o forzar tras timeout
  if (document.readyState === 'complete') {
    setTimeout(hide, 1800);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 400));
    setTimeout(hide, TIMEOUT);
  }
}
