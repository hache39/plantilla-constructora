// ─── Filtro de proyectos ───
export function initProyectos() {
  const btns  = document.querySelectorAll('.filtro-btn');
  const cards = document.querySelectorAll('.proyecto-card');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Actualizar botón activo
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filtrar tarjetas
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}
