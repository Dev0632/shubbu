const apiUrl = 'https://fakestoreapi.com/products';
let products = [];
let filteredProducts = [];
let limit = 10;

// Selectors
const productGrid = document.getElementById('productGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadingIndicator = document.getElementById('loading');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');

// Fetch products from API
async function fetchProducts() {
    try {
        showLoading();
        const response = await fetch(apiUrl);
        products = await response.json();
        filteredProducts = [...products];
        populateCategories();
        renderProducts();
        hideLoading();
    } catch (error) {
        console.error('Error fetching products:', error);
        hideLoading();
    }
}

// Show products on the page
function renderProducts() {
    productGrid.innerHTML = '';
    const toDisplay = filteredProducts.slice(0, limit);
    toDisplay.forEach((product) => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <p>${product.description.substring(0, 50)}...</p>
            </div>
        `;
    });
}

// Filter by category
categoryFilter.addEventListener('change', (e) => {
    const category = e.target.value;
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter((product) => product.category === category);
    }
    limit = 10;
    renderProducts();
});

// Sort by price
sortPrice.addEventListener('change', (e) => {
    const sortValue = e.target.value;
    if (sortValue === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    limit = 10;
    renderProducts();
});

// Load more products
loadMoreBtn.addEventListener('click', () => {
    limit += 10;
    renderProducts();
});

// Search products by name
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query)
    );
    limit = 10;
    renderProducts();
});

// Populate category filter options
function populateCategories() {
    const categories = [...new Set(products.map((product) => product.category))];
    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Loading states
function showLoading() {
    loadingIndicator.style.display = 'block';
}

function hideLoading() {
    loadingIndicator.style.display = 'none';
}

// Fetch and display products on page load
fetchProducts();
