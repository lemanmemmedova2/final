document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productImage = decodeURIComponent(urlParams.get('image'));
    const productTitle = decodeURIComponent(urlParams.get('title'));
    const productImageElement = document.getElementById('productImage');
    const productTitleElement = document.getElementById('productTitle');
    const productDescriptionElement = document.getElementById('productDescription');

    if (productImageElement && productTitleElement && productDescriptionElement) {
        productImageElement.src = productImage;
        productTitleElement.textContent = productTitle;

        fetch(`https://api.sampleapis.com/coffee/iced`)  
            .then(response => response.json())
            .then(data => {
              fetch(`https://api.sampleapis.com/coffee/iced`)  
              .then(response => response.json())
              .then(data => {
                  let filteredCoffee = data.find(coffee => coffee.title === productTitle);
                  if (filteredCoffee) {
                      productDescriptionElement.textContent = filteredCoffee.description;
                  } 

              })
              .catch(error => console.error('Error fetching description:', error));        
              displayCoffee(filteredCoffee);
            })
            
    } 
    fetch(`https://api.sampleapis.com/coffee/hot`)  
    .then(response => response.json())
    .then(data => {
      fetch(`https://api.sampleapis.com/coffee/hot`) 
      .then(response => response.json())
      .then(data => {
          let filteredCoffee = data.find(coffee => coffee.title === productTitle);
          console.log(filteredCoffee);
          if (filteredCoffee) {
            filteredCoffee.ingredients.forEach(b =>console.log(b));
              
              productDescriptionElement.textContent = filteredCoffee.description;
          } 

      })
      .catch(error => console.error('Error fetching description:', error));        
      displayCoffee(filteredCoffee);

       
    })
    
  let selectButton = document.querySelector('.selectButton');
  let container = document.getElementById('coffeeContainer');
  let selectedCategory = 'hot';
  function searchCoffee() {
    let searchTitle = document.getElementById('searchInput').value.toLowerCase().trim();
  
    fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
        .then(response => response.json())
        .then(data => {
            let filteredCoffee = data.filter(coffee => coffee.title.toLowerCase().trim().includes(searchTitle));
            displayCoffee(filteredCoffee);
        })
        .catch(error => console.error('Error:', error));
  }
  selectButton.addEventListener('change', function (e) {
       selectedCategory = e.target.value;

      fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
          .then(response => response.json())
          .then(data => {
              console.log(data);
              displayCoffee(data);
          })
          .catch(error => console.error('Error:', error));
  });
  let searchButton = document.querySelector('.src button');
  searchButton.addEventListener('click', searchCoffee);

  fetch('https://api.sampleapis.com/coffee/hot', {})
      .then(response => response.json())
      .then(data => {
          console.log(data);
          displayCoffee(data);
      })
      .catch(error => console.error('Error:', error));
});


function displayCoffee(coffeeData) {
  let container = document.getElementById('coffeeContainer');
  container.innerHTML = '';

  coffeeData.forEach(coffee => {
      let border = document.createElement('div');
      border.classList.add('coffee-border');

      let image = document.createElement('img');
      image.src = coffee.image;
      image.alt = coffee.title;

      let title = document.createElement('h3');
      title.textContent = coffee.title;

      border.appendChild(image);
      border.appendChild(title);

      let price = document.createElement('p');
      price.textContent = '$' + (Math.floor(Math.random() * 11) + 5).toFixed(2);
      border.appendChild(price);

      let moreButton = document.createElement('button');
      moreButton.textContent = 'More';
      moreButton.classList.add('more-button');

      moreButton.addEventListener('click', function () {
          let url = `more.html?image=${encodeURIComponent(coffee.image)}&title=${encodeURIComponent(coffee.title)}&price=${encodeURIComponent(price.textContent)}`;
          window.location.href = url;
      });
      moreButton.addEventListener('click', function () {
        let url = `more.html?image=${encodeURIComponent(coffee.image)}&title=${encodeURIComponent(coffee.title)}`;
        window.location.href = url;
      });
      border.appendChild(moreButton);

      let addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.classList.add('add-to-cart-button');
      border.appendChild(addToCartButton);

      container.appendChild(border);
  });
}
function searchCoffee() {
  let searchTitle = document.getElementById('searchInput').value.toLowerCase().trim();

  fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
      .then(response => response.json())
      .then(data => {
          let filteredCoffee = data.filter(coffee => coffee.title.toLowerCase().trim().includes(searchTitle));
          displayCoffee(filteredCoffee);
      })
      .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  let selectButton = document.querySelector('.selectButton');
  let container = document.getElementById('coffeeContainer');
  let selectedCategory = 'hot';

  function searchCoffee() {
      let searchTitle = document.getElementById('searchInput').value.toLowerCase().trim();

      fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
          .then(response => response.json())
          .then(data => {
              let filteredCoffee = data.filter(coffee => coffee.title.toLowerCase().trim().includes(searchTitle));
              displayCoffee(filteredCoffee);
          })
          .catch(error => console.error('Error:', error));
  }

  selectButton.addEventListener('change', function (e) {
      selectedCategory = e.target.value;

      fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
          .then(response => response.json())
          .then(data => {
              console.log(data);
              displayCoffee(data);
          })
          .catch(error => console.error('Error:', error));
  });

  let searchButton = document.querySelector('.src button');
  searchButton.addEventListener('click', searchCoffee);

  fetch('https://api.sampleapis.com/coffee/hot', {})
      .then(response => response.json())
      .then(data => {
          console.log(data);
          displayCoffee(data);
      })
      .catch(error => console.error('Error:', error));
});

function displayCoffee(coffeeData) {
  let container = document.getElementById('coffeeContainer');
  container.innerHTML = '';

  coffeeData.forEach(coffee => {
      let border = document.createElement('div');
      border.classList.add('coffee-border');

      let image = document.createElement('img');
      image.src = coffee.image;
      image.alt = coffee.title;

      let title = document.createElement('h3');
      title.textContent = coffee.title;

      border.appendChild(image);
      border.appendChild(title);

      let price = document.createElement('p');
      price.textContent = '$' + (Math.floor(Math.random() * 11) + 5).toFixed(2);
      border.appendChild(price);

      let moreButton = document.createElement('button');
      moreButton.textContent = 'More';
      moreButton.classList.add('more-button');
      moreButton.addEventListener('click', function () {
          let url = `more.html?image=${encodeURIComponent(coffee.image)}&title=${encodeURIComponent(coffee.title)}&price=${encodeURIComponent(price.textContent)}`;
          window.location.href = url;
      });
      border.appendChild(moreButton);

      let addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.classList.add('add-to-cart-button');
      border.appendChild(addToCartButton);

      container.appendChild(border);

      addToCartButton.addEventListener('click', function () {
          let cartCoffee = {
              title: coffee.title,
              price: parseFloat(price.textContent.substring(1)),
          };

          addToCart(cartCoffee);
      });
  });
}

function searchCoffee() {
  let searchTitle = document.getElementById('searchInput').value.toLowerCase().trim();

  fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
      .then(response => response.json())
      .then(data => {
          let filteredCoffee = data.filter(coffee => coffee.title.toLowerCase().trim().includes(searchTitle));
          displayCoffee(filteredCoffee);
      })
      .catch(error => console.error('Error:', error));
}

function addToCart(coffee) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let existingItem = cartItems.find(item => item.title === coffee.title);

  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cartItems.push({
          title: coffee.title,
          image: coffee.image,
          price: coffee.price,
          quantity: 1,
      });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
}
function setupAddToCartButtons() {
  let addToCartButtons = document.querySelectorAll('.add-to-cart-button');

  addToCartButtons.forEach(addToCartButton => {
      addToCartButton.addEventListener('click', function () {
          let coffeeBorder = this.closest('.coffee-border');
          let cartCoffee = {
              title: coffeeBorder.querySelector('h3').textContent,
              image: coffeeBorder.querySelector('img').src,
              price: parseFloat(coffeeBorder.querySelector('p').textContent.substring(1)),
          };

          addToCart(cartCoffee);
      });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const productImage = decodeURIComponent(urlParams.get('image'));
  const productTitle = decodeURIComponent(urlParams.get('title'));

  const productImageElement = document.getElementById('productImage');
  const productTitleElement = document.getElementById('productTitle');
  const productDescriptionElement = document.getElementById('productDescription');

  if (productImageElement && productTitleElement && productDescriptionElement) {
      productImageElement.src = productImage;
      productTitleElement.textContent = productTitle;

      fetch(`https://api.sampleapis.com/coffee/iced`)
          .then(response => response.json())
          .then(data => {
              let filteredCoffee = data.find(coffee => coffee.title === productTitle);
              if (filteredCoffee) {
                  productDescriptionElement.textContent = filteredCoffee.description;
              }
          })
          .catch(error => console.error('Error fetching description:', error));

      displayCoffee(filteredCoffee);
  }

  fetch(`https://api.sampleapis.com/coffee/hot`)
      .then(response => response.json())
      .then(data => {
          let filteredCoffee = data.find(coffee => coffee.title === productTitle);
          if (filteredCoffee) {
              filteredCoffee.ingredients.forEach(b => console.log(b));
              productDescriptionElement.textContent = filteredCoffee.description;
          }
      })
      .catch(error => console.error('Error fetching description:', error));

      let selectButton = document.querySelector('.selectButton');
      let container = document.getElementById('coffeeContainer');
      let selectedCategory = 'hot';
  
      function searchCoffee() {
          let searchTitle = document.getElementById('searchInput').value.toLowerCase().trim();
  
          fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
              .then(response => response.json())
              .then(data => {
                  let filteredCoffee = data.filter(coffee => coffee.title.toLowerCase().trim().includes(searchTitle));
                  displayCoffee(filteredCoffee);
                  setupAddToCartButtons();
              })
              .catch(error => console.error('Error:', error));
      }
  
      selectButton.addEventListener('change', function (e) {
          selectedCategory = e.target.value;
  
          fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
              .then(response => response.json())
              .then(data => {
                  console.log(data);
                  displayCoffee(data);
                  setupAddToCartButtons();
              })
              .catch(error => console.error('Error:', error));
      });
  
      let searchButton = document.querySelector('.src button');
      searchButton.addEventListener('click', function () {
          searchCoffee(); 
      });
  
      fetch('https://api.sampleapis.com/coffee/hot', {})
          .then(response => response.json())
          .then(data => {
              console.log(data);
              displayCoffee(data);
              setupAddToCartButtons(); 
          })
          .catch(error => console.error('Error:', error));
  });
function displayCoffee(coffeeData) {
  let container = document.getElementById('coffeeContainer');
  container.innerHTML = '';

  coffeeData.forEach(coffee => {
      let border = document.createElement('div');
      border.classList.add('coffee-border');

      let image = document.createElement('img');
      image.src = coffee.image;
      image.alt = coffee.title;

      let title = document.createElement('h3');
      title.textContent = coffee.title;

      border.appendChild(image);
      border.appendChild(title);

      let price = document.createElement('p');
      price.textContent = '$' + (Math.floor(Math.random() * 11) + 5).toFixed(2);
      border.appendChild(price);

      let moreButton = document.createElement('button');
      moreButton.textContent = 'More';
      moreButton.classList.add('more-button');

      moreButton.addEventListener('click', function () {
          let url = `more.html?image=${encodeURIComponent(coffee.image)}&title=${encodeURIComponent(coffee.title)}&price=${encodeURIComponent(price.textContent)}`;
          window.location.href = url;
      });

      border.appendChild(moreButton);

      let addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.classList.add('add-to-cart-button');
      border.appendChild(addToCartButton);

      container.appendChild(border);
  });
}


function searchCoffee() {
  let searchTitle = document.getElementById('searchInput').value.toLowerCase().trim();

  fetch(`https://api.sampleapis.com/coffee/${selectedCategory}`, {})
      .then(response => response.json())
      .then(data => {
          let filteredCoffee = data.filter(coffee => coffee.title.toLowerCase().trim().includes(searchTitle));

          if (filteredCoffee.length === 0) {
              alert('No results found for the given search criteria.');
          } else {
              displayCoffee(filteredCoffee);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while fetching data. Please try again.');
      });
  return false;
}
