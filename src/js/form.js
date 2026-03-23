// ─── Formulario de contacto ───
export function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const required = form.querySelectorAll('[required]');
    let valid = true;

    // Validación básica
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#e53e3e';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Estado de envío
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simular envío (reemplazar con fetch real)
    setTimeout(() => {
      btn.textContent = 'Solicitud enviada ✓';
      btn.style.background = '#2d6a4f';
      form.reset();

      setTimeout(() => {
        btn.textContent = 'Enviar solicitud de presupuesto';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    }, 1200);
  });

  // Limpiar error visual al escribir
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
    });
  });
}
