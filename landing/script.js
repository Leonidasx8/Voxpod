document.addEventListener('DOMContentLoaded', () => {
  const englishToggle = document.getElementById('toggle-english');
  const englishModal = document.getElementById('english-modal');
  const closeModal = document.querySelector('.close-modal');

  if (englishToggle) {
    englishToggle.addEventListener('click', () => {
      englishModal.hidden = false;
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      englishModal.hidden = true;
    });
  }

  document.querySelectorAll('[data-accordion]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.accordion;
      const el = document.getElementById(id);
      if (el) {
        el.hidden = !el.hidden;
      }
    });
  });
});
