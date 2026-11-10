// ALN concept site: tiny, dependency-free progressive enhancements.
document.documentElement.classList.add('js');
const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
if (toggle && mobileNav) {
  const closeMenu = () => {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  };
  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const reveals = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((items) => {
    items.forEach(item => { if (item.isIntersecting) { item.target.classList.add('is-visible'); observer.unobserve(item.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px 20px 0px' });
  reveals.forEach(el => observer.observe(el));
} else reveals.forEach(el => el.classList.add('is-visible'));
const subjectSelect = document.querySelector('#subject');
if (subjectSelect) {
  const subjectFromURL = new URLSearchParams(window.location.search).get('objet');
  if (subjectFromURL) {
    const matching = [...subjectSelect.options].find(option => option.value.toLowerCase() === subjectFromURL.toLowerCase());
    if (matching) subjectSelect.value = matching.value;
  }
}
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = `Demande ALN — ${data.get('objet')}`;
    const body = `Bonjour Julien,\n\n${data.get('message')}\n\nNom : ${data.get('nom')}\nE-mail : ${data.get('email')}\n\nEnvoyé depuis la maquette ALN.`;
    window.location.href = `mailto:alnautiques@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
