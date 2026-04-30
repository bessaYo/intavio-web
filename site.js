const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#site-nav');

if (menu && menuLinks) {
  const closeMenu = () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('is-active');
    menu.setAttribute('aria-expanded', 'false');
  };

  menu.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active', isOpen);
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  menuLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
