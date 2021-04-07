(() => {
  const refs_1 = {
    mobMenuOpen: document.querySelector('[data-menu-open]'),
    mobMenuClose: document.querySelector('[data-menu-close]'),
    mobMenu: document.querySelector('.mob-menu'),
  };

  refs_1.mobMenuOpen.addEventListener('click', toggleMobMenu);
  refs_1.mobMenuClose.addEventListener('click', toggleMobMenu);

  function toggleMobMenu() {
    refs_1.mobMenu.classList.toggle('is-open');
  }
})();
