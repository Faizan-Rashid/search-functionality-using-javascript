
import { products } from "./data.js";


const filterProducts = (productCategory) => {
    if (productCategory === "all")
        displayProducts(products.data);
    else {
        let filteredproducts = products.data.filter(product => product.category.toLowerCase() === productCategory)
        displayProducts(filteredproducts);
    }
}


const displayProducts = (products) => {
    const productContainer = document.querySelector("#productContainer");
    productContainer.innerHTML = ``;

    for (let product of products) {

        let card = document.createElement("div");
        card.classList.add("card", `${product.category}`) //`hide`

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let image = document.createElement("img");
        image.setAttribute("src", product.image);

        imageContainer.appendChild(image);
        card.appendChild(imageContainer);

        productContainer.appendChild(card);

        // set name of product
        let container = document.createElement("div");
        container.classList.add("name-cont");
        let name = document.createElement("h5");
        name.innerText = product.productName.toUpperCase();
        container.appendChild(name);
        card.appendChild(container);

        // set price
        let price = document.createElement("h5");
        price.innerText = `$ ${product.price}`;
        container.appendChild(price)
    }
}

window.addEventListener("load", () => { filterProducts("all") })


document.querySelectorAll(".button-value").forEach(button => button.addEventListener("click", () => {
    filterProducts(button.innerText.toLowerCase())
}))


const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("change", () => {
    document.querySelectorAll(".card").forEach(product => {
        if (product.innerText.includes(searchInput.value.toUpperCase()))
            product.classList.remove('hide')
        else
            product.classList.add('hide')
    }
    )
    searchInput.value = "";
})