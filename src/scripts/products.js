const products = [
    { category: 'KUR', fabric: 'Cotton', size: 'Kids', type: 'Kurti', price: 64.99, sku: 'KUR-COT-Kids' },
    { category: 'KUR', fabric: 'Cotton', size: '36', type: 'Kurti', price: 64.99, sku: 'KUR-COT-36' },
    { category: 'KUR', fabric: 'Cotton', size: '38', type: 'Kurti', price: 64.99, sku: 'KUR-COT-38' },
    { category: 'KUR', fabric: 'Cotton', size: '40', type: 'Kurti', price: 64.99, sku: 'KUR-COT-40' },
    { category: 'KUR', fabric: 'Cotton', size: '42', type: 'Kurti', price: 64.99, sku: 'KUR-COT-42' },
    { category: 'KUR', fabric: 'Cotton', size: '44', type: 'Kurti', price: 64.99, sku: 'KUR-COT-44' },
    { category: 'KUR', fabric: 'Cotton', size: '46', type: 'Kurti', price: 74.99, sku: 'KUR-COT-46' },
    { category: 'KUR', fabric: 'Cotton', size: '48', type: 'Kurti', price: 74.99, sku: 'KUR-COT-48' },
    { category: 'KUR', fabric: 'Cotton', size: '50', type: 'Kurti', price: 74.99, sku: 'KUR-COT-50' },
    { category: 'KUR', fabric: 'Cotton', size: '52', type: 'Kurti', price: 79.99, sku: 'KUR-COT-52' },
    { category: 'KUR', fabric: 'Cotton', size: '54', type: 'Kurti', price: 79.99, sku: 'KUR-COT-54' },
    { category: 'KUR', fabric: 'Geogette', size: 'Kids', type: 'Dress', price: 64.99, sku: 'KUR-GEO-Kids' },
    { category: 'KUR', fabric: 'Geogette', size: '36', type: 'Dress', price: 64.99, sku: 'KUR-GEO-36' },
    { category: 'KUR', fabric: 'Geogette', size: '38', type: 'Dress', price: 64.99, sku: 'KUR-GEO-38' },
    { category: 'KUR', fabric: 'Geogette', size: '40', type: 'Dress', price: 64.99, sku: 'KUR-GEO-40' },
    { category: 'KUR', fabric: 'Geogette', size: '42', type: 'Dress', price: 64.99, sku: 'KUR-GEO-42' },
    { category: 'KUR', fabric: 'Geogette', size: '44', type: 'Dress', price: 64.99, sku: 'KUR-GEO-44' },
    { category: 'KUR', fabric: 'Geogette', size: '46', type: 'Dress', price: 74.99, sku: 'KUR-GEO-46' },
    { category: 'KUR', fabric: 'Geogette', size: '48', type: 'Dress', price: 74.99, sku: 'KUR-GEO-48' },
    { category: 'KUR', fabric: 'Geogette', size: '50', type: 'Dress', price: 74.99, sku: 'KUR-GEO-50' },
    { category: 'KUR', fabric: 'Geogette', size: '52', type: 'Dress', price: 79.99, sku: 'KUR-GEO-52' },
    { category: 'KUR', fabric: 'Geogette', size: '54', type: 'Dress', price: 79.99, sku: 'KUR-GEO-54' }
];

function renderProducts(filteredProducts = products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-header">
                <h3>${product.fabric}</h3>
                <span class="category">${product.category}</span>
            </div>
            <div class="product-details">
                <p><strong>Size:</strong> ${product.size}</p>
                <p><strong>Type:</strong> ${product.type}</p>
                <p><strong>SKU:</strong> ${product.sku}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
            <button class="btn btn-small" onclick="addToOrder('${product.sku}', '${product.fabric}', '${product.size}', ${product.price})">Add to Order</button>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('fabric-filter').addEventListener('change', filterProducts);
document.getElementById('size-filter').addEventListener('change', filterProducts);
document.getElementById('type-filter').addEventListener('change', filterProducts);
document.getElementById('clear-filters').addEventListener('click', clearFilters);

function filterProducts() {
    const fabric = document.getElementById('fabric-filter').value;
    const size = document.getElementById('size-filter').value;
    const type = document.getElementById('type-filter').value;

    const filtered = products.filter(p => 
        (fabric ? p.fabric === fabric : true) &&
        (size ? p.size === size : true) &&
        (type ? p.type === type : true)
    );

    renderProducts(filtered);
}

function clearFilters() {
    document.getElementById('fabric-filter').value = '';
    document.getElementById('size-filter').value = '';
    document.getElementById('type-filter').value = '';
    renderProducts(); // Reset to show all products
}

renderProducts();