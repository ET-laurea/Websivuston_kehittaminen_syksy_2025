'use strict';

const img = document.querySelector(".kuva");
const btn = document.getElementById("zoomButton");

btn.addEventListener("click", function() {
    // Lukitaan korkeus vain kerran ensimmäisellä painalluksella
    if (!img.dataset.stretched) {
        img.style.height = img.offsetHeight + "px"; // korkeus kiinteäksi
        img.dataset.stretched = "true";
    }
    
    // Kasvatetaan vain leveyttä
    let currentWidth = img.offsetWidth;
    img.style.width = (currentWidth + 100) + "px";
});
