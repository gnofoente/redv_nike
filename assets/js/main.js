document.addEventListener('DOMContentLoaded', function() {

  var menuIcon = document.querySelector('.menu__icon');
  var menuItems = document.querySelector('.menu__items');
  var filter = document.querySelector('.filter-options');
  var filterButton = document.querySelectorAll('.button--filter');
  var showcase = document.querySelectorAll('.showcase');

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

  (function getProducts(){
    var req = new Request('http://www.raphaelfabeni.com.br/rv/data.json');
    var bestsellers;
    var products;
    var releases;

    req.send(function(data) {
      products = JSON.parse(data);
      bestsellers = products['best-sellers'];
      releases = products['releases'];
      
      renderProducts(bestsellers, showcase[0]);
      renderProducts(releases, showcase[1]);

      var flkty = new Flickity(showcase[0], {
        contain: true,
        groupCells: 2,
        cellAlign: 'left',
        setGallerySize: false,
        pageDots: false
      });

      var flkty2 = new Flickity(showcase[1], {
        contain: true,
        groupCells: 2,
        cellAlign: 'left',
        setGallerySize: false,
        pageDots: false
      });
    });

  }());

});
