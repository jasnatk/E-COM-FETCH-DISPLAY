//fetch product from API

async function fetchProducts(){


const response = await fetch('https://fakestoreapi.com/products')
const products = await response.json()
           return products
}




//Display product on the page

function displayProducts (products){
    const productContainer = document.getElementById('productContainer')
    productContainer.innerHTML = ''

    products.forEach(product=>{
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')

        productDiv.innerHTML =`
            <img src="${product.image}" alt="${product.title}" />   
            <h4>${product.title}</h4>   
            <p style="color:green;font-size:30px;">$${product.price} </p>` 
            productContainer.appendChild(productDiv)
    }) 
}

//Product search input, filter dispay

document.getElementById("searchButton").addEventListener('click',async()=>{
    const searchTerm = document.getElementById('searchInput').value.toLowerCase()
    const products = await fetchProducts()

    const filteredProducts = products.filter(product=>product.title.toLowerCase().includes(searchTerm)
)
displayProducts(filteredProducts)
if (filteredProducts.length === 0){
    productContainer.innerHTML = '<p> No products found'
}
})



window.onload = async()=>{
    {
        const products = await fetchProducts()
        displayProducts(products)
    
    }
    }
    
   