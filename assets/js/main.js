var menuIcon = document.querySelector('.menu__icon');
var menuItems = document.querySelector('.menu__items');
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {

  if (menuItems.style.opacity == 0) {
    menuItems.classList.toggle('menu__items--visible');
    setTimeout(function(){
      menuItems.style.opacity = 1;
    }, 50);
  } else {
    menuItems.style.opacity = 0;
    setTimeout(function(){
      menuItems.classList.toggle('menu__items--visible');
    }, 150);
  }
}
