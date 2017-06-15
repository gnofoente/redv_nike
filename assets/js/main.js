document.addEventListener('DOMContentLoaded', function() {

  var menuIcon = document.querySelector('.menu__icon');
  var menuItems = document.querySelector('.menu__items');
  var filter = document.querySelector('.filter-options');
  var filterButton = document.querySelectorAll('.button--filter');

  menuIcon.addEventListener('click', function() {
    toggleClass(menuItems, 'menu__items--visible');
  });

  filterButton.forEach(function(val) {
    val.addEventListener('click', function() {
      toggleClass(filter, 'filter-options--visible');
    });
  });

  function toggleClass(element, elementClass) {
    element.classList.toggle(elementClass);
  }

});
