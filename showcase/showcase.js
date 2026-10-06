(() => {
  const root = document.documentElement;
  const options = [...document.querySelectorAll('.scale-option')];
  const label = document.querySelector('#scale-description');
  const scales = {
    compact: { control: '12px', card: '16px', nav: '20px', label: 'Contido · card 16 px' },
    balanced: { control: '16px', card: '20px', nav: '24px', label: 'Equilibrado · card 20 px' },
    expressive: { control: '20px', card: '24px', nav: '28px', label: 'Expressivo · card 24 px' }
  };

  function apply(name, persist = true) {
    const scale = scales[name];
    if (!scale) return;
    root.style.setProperty('--control-radius', scale.control);
    root.style.setProperty('--card-radius', scale.card);
    root.style.setProperty('--nav-radius', scale.nav);
    label.textContent = scale.label;
    options.forEach((option) => {
      const active = option.dataset.scale === name;
      option.classList.toggle('active', active);
      option.setAttribute('aria-pressed', String(active));
    });
    if (persist) localStorage.setItem('vui-radius-lab-choice', name);
  }

  options.forEach((option) => option.addEventListener('click', () => apply(option.dataset.scale)));
  apply(localStorage.getItem('vui-radius-lab-choice') || 'balanced', false);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
  }
})();