document.addEventListener('DOMContentLoaded', function () {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cartItems');
    let totalAmountElement = document.getElementById('totalAmount');

    function displayCart() {
        cartItemsContainer.innerHTML = '';
        let amount = 0;

        cartItems.forEach((item, index) => {
            let cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            let titleElement = document.createElement('p');
            titleElement.textContent = item.title;
            titleElement.classList.add('cart-item-title');
            cartItemElement.appendChild(titleElement);

            let quantityElement = document.createElement('p');
            quantityElement.textContent = `Quantity: ${item.quantity}`;
            quantityElement.classList.add('cart-item-quantity');
            cartItemElement.appendChild(quantityElement);

            let priceElement = document.createElement('p');
            priceElement.textContent = `Price: $${item.price.toFixed(2)}`;
            priceElement.classList.add('cart-item-price');
            cartItemElement.appendChild(priceElement);

            let totalAmountElement = document.createElement('p');
            totalAmountElement.textContent = ` Amount: $${(item.price * item.quantity).toFixed(2)}`;
            totalAmountElement.classList.add('cart-item-total-amount');
            cartItemElement.appendChild(totalAmountElement);

            amount += item.price * item.quantity;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('cart-item-remove');
            removeButton.addEventListener('click', function () {
                item.quantity--;

                if (item.quantity === 0) {
                    cartItems.splice(index, 1);
                }

                localStorage.setItem('cart', JSON.stringify(cartItems));
                displayCart();
            });
            cartItemElement.appendChild(removeButton);

            cartItemsContainer.appendChild(cartItemElement);
        });

        totalAmountElement.textContent = `$${amount.toFixed(2)}`;
    }
    displayCart();
});
