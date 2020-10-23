const menuList = document.querySelector("#menu-list"),
  menuButton = document.querySelector("#menu-button"),
  showHideMenu = () => {
    menuList.classList.toggle("hidden");
    menuButton.classList.toggle("active");
  };
menuButton.addEventListener("click", showHideMenu);