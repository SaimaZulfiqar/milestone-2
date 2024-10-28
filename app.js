const products = [
    {
        id: 1,
        name: "Chocolate Chip Cookies",
        price: "30kr",
        description: "Classic, buttery treats with crisp edges and soft centers, loaded with melty chocolate chips.",
        image: "images/image0.jpeg"
    }
    {
        id: 2,
        name: "Red velvet Cookies",
        price: "30kr",
        description:  "Red velvet filled cookies are soft, cocoa-flavored treats with a rich red color and a creamy, sweet filling inside.",
        image: "images/image1.jpeg",
    }

    {
        id: 3,
        name: "Biscoffe Cookies",
        price: "30kr",
        description: "Biscoff-filled cookies are soft, spiced treats with a creamy, sweet Biscoff spread center, offering a rich caramelized flavor in every bite.",
        image: "images/image2.jpeg",
    }

    {id:4,
        name:"Multiple Cookies",
        price: "80kr",
        description: "Multiple cookies feature a mix of classic flavors like chocolate chip, 
                double chocolate and red velvet offering a delicious treat for every taste.",

                image: "images/image5.jpeg",
            }





                // Select the container element where the products will be displayed
const productContainer = document.querySelector('.product-container');

// Loop through each product in the array
products.forEach(product => {
    // Create a div for the product
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-image');
    
    // Create an img element for the product image
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add('cookies-image');

    // Create an h2 element for the product name
    const productName = document.createElement('h2');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    // Create a p element for the product price
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = product.price;

    // Create a p element for the product description
    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;

    // Create a button for adding the product to the cart
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-btn');
    addToCartButton.textContent = 'Add to Cart';

    // Append all elements to the product div
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(addToCartButton);

    // Append the product div to the main product container
    productContainer.appendChild(productDiv);
});
