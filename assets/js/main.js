document.addEventListener('DOMContentLoaded', function() {

  var menuIcon = document.querySelector('.menu__icon');
  var menuItems = document.querySelector('.menu__items');
  var filter = document.querySelector('.filter-options');
  var filterButton = document.querySelectorAll('.button--filter');
  var showcase = document.querySelectorAll('.showcase');

  Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "$";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this,
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
  };

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

  function renderProducts(productCollection, parentNode) {
    var frag = document.createDocumentFragment();


    productCollection.forEach(function(product) {
      var productElement = document.createElement('li');
      var image = document.createElement('img');
      var customize = document.createElement('p');
      var name = document.createElement('p');
      var attribute = document.createElement('p');
      var price = document.createElement('p');
      var installments = document.createElement('p');
      var installmentsQty = document.createElement('span');
      var installmentsValue = document.createElement('span');
      var buyButton = document.createElement('button');

      productElement.classList.add('product', 'carousel-cell');

      image.src = product.image;
      image.classList.add('product__image');

      customize.appendChild(document.createTextNode('Personalize'));
      customize.classList.add('product__customize');

      name.classList.add('product__name');
      name.appendChild(document.createTextNode(product.title));

      attribute.classList.add('product__attribute');
      attribute.textContent = product['high-top'] ? "Cano Alto" : "Cano Baixo";

      price.classList.add('product__price');
      product.price = product.price.formatMoney(2, 'R$', '.', ',');
      price.appendChild(document.createTextNode(product.price));

      installments.classList.add('product__installments');
      installmentsQty.classList.add('product__installments-qty');
      installmentsValue.classList.add('product__installments-value');

      installmentsQty.appendChild(document.createTextNode(
        "ou " + product.installments.number + "X de "
      ));
      product.installments.value = product.installments.value.formatMoney(2, 'R$', '.', ',');
      installmentsValue.appendChild(document.createTextNode(
        product.installments.value + " sem juros"
      ));

      installments.appendChild(installmentsQty);
      installments.appendChild(installmentsValue);
      price.appendChild(installments);

      buyButton.classList.add('button', 'button--buy');
      buyButton.appendChild(document.createTextNode("Comprar"));

      productElement.appendChild(image);
      productElement.appendChild(customize);
      productElement.appendChild(name);
      productElement.appendChild(attribute);
      productElement.appendChild(price);
      productElement.appendChild(buyButton);

      frag.appendChild(productElement);
    });
    parentNode.appendChild(frag);
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
