function submitOrder(event) {
    event.preventDefault();
    
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (product && name && email && phone && address) {
        alert(`Order Submitted!\n\nProduct: ${product}\nQuantity: ${quantity}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\nThank you for your order!`);
        document.querySelector('.order-form').reset();
    } else {
        alert('Please fill in all fields');
    }
}