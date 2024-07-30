let currentRotation = 0;
const clothes = document.querySelectorAll('.clothes');

function rotateClothes() {
    currentRotation += 72; // 360 / 5 = 72 degrees
    clothes.forEach((cloth, index) => {
        const newRotation = currentRotation + (index * 72);
        cloth.style.transform = `rotateY(${newRotation}deg) translateZ(200px)`;
    });
}

setInterval(rotateClothes, 2000);
