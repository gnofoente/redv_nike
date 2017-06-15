var menuIcon = document.querySelector('.menu__icon');
var menuItems = document.querySelector('.menu__items');
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuItems.classList.toggle('menu__items--visible');
}
