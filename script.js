
function searchProduct() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    console.log("Search query: " + query); // Logs the search query
    const products = document.querySelectorAll('.box1');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        console.log("Product name: " + productName); // Logs product name
        if (productName.includes(query)) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}
