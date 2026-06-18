/* ═══════════════════════════════════════════════
   Belle Fa Business – main.js
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── FILTRES ─── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.card');
  const countEl    = document.getElementById('count');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      // Retirer .active de tous les boutons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visible  = 0;

      cards.forEach(card => {
        const cats = card.dataset.cat || '';
        const show = filter === 'tout' || cats.includes(filter);

        card.style.display = show ? 'block' : 'none';
        if (show) visible++;
      });

      // Mettre à jour le compteur
      countEl.textContent = visible + ' article' + (visible > 1 ? 's' : '');
    });
  });

});
