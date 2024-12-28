
        // Function to search for products based on input
        function searchProduct() {
            const query = document.getElementById('search-bar').value.toLowerCase();
            const products = document.querySelectorAll('.box1');

            products.forEach(product => {
                const productName = product.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(query)) {
                    product.classList.remove('hidden');
                } else {
                    product.classList.add('hidden');
                }
            });
        }