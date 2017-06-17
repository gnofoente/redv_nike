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
    product.installments.value = product.installments.value.formatMoney(2, '', '.', ',');
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
