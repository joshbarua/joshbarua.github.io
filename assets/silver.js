// Keep the touch-menu selection aligned with the section being read.
const menuLinks = [...document.querySelectorAll('.touch-menu a')];
const sections = [...document.querySelectorAll('#about, #research, #news, #publications')];
function updateMenu() {
  const readingLine = window.innerHeight * 0.3;
  const current = sections.reduce((active, section) =>
    section.getBoundingClientRect().top <= readingLine ? section : active, sections[0]);
  menuLinks.forEach(link => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateMenu, { passive: true });
window.addEventListener('resize', updateMenu);
updateMenu();
