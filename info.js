document.addEventListener('DOMContentLoaded', () => {
    const productDetails = {
        "clothName": "Stylish T-Shirt",
        "price": "$29.99",
        "color": "Blue",
        "size": "Medium",
        "company": "Fashion Co."
    };

    const clothNameElement = document.getElementById('cloth-name');
    const priceElement = document.getElementById('price');
    const colorElement = document.getElementById('color');
    const sizeElement = document.getElementById('size');
    const companyElement = document.getElementById('company');

    clothNameElement.textContent = productDetails.clothName;
    priceElement.textContent = productDetails.price;
    colorElement.textContent = productDetails.color;
    sizeElement.textContent = productDetails.size;
    companyElement.textContent = productDetails.company;
});

function startConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = `${Math.random() * 2.5}s`;
        confettiContainer.appendChild(confetti);
    }

    const popup = document.getElementById('popup-container');
    popup.style.display = 'flex';

    setTimeout(() => {
        confettiContainer.innerHTML = '';
        popup.style.display = 'none';
    }, 4000);
}
