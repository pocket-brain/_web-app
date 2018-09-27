;(() => {
  const burger   = document.querySelector(`.js-show-side-menu`),
        sideMenu = document.querySelector(`.js-side-menu`),
        header   = document.querySelector(`.js-header_with-side-menu`);

  const burgerClickHandler = () => {
    burger.classList.toggle(`burger_menu-is-open`);
    sideMenu.classList.toggle(`side-menu_is-open`);
    header.classList.toggle(`header_with-side-menu`);
  };

  if (burger && sideMenu && header) {
    burger.addEventListener(`click`, burgerClickHandler);
  }
})();
