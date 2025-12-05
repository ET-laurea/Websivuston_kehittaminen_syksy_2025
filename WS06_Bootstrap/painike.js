'use strict';

const img = document.querySelector(".kuva");
const btn = document.getElementById("zoomButton");

// Tallennetaan alkuperäiset mitat
const originalWidth = img.offsetWidth;
const originalHeight = img.offsetHeight;

// Maksimileveys, jonka jälkeen reset tapahtuu
const maxWidth = originalWidth + 500; // säädä tarvittaessa

let locked = false;

btn.addEventListener("click", function () {
    if (locked) return; // Nappi ei tee mitään jos lukittu

    // Lukitaan korkeus ensimmäisellä klikkauksella
    if (!img.dataset.stretched) {
        img.style.height = originalHeight + "px";
        img.dataset.stretched = "true";
    }

    const newWidth = img.offsetWidth + 100;

    if (newWidth >= maxWidth) {
        // Lukitaan nappi ja vaihdetaan tyyli
        locked = true;
        btn.classList.add("locked");

        // Reset 2 sekunnin kuluttua
        setTimeout(() => {
            img.style.width = originalWidth + "px";
            img.style.height = originalHeight + "px";
            img.dataset.stretched = "";
            locked = false;
            btn.classList.remove("locked");
        }, 2000);

        return;
    }

    // Kasvata kuvaa jos ei ole maxWidth
    img.style.width = newWidth + "px";
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  toggleBtn.addEventListener('click', () => {
    // Haetaan nav-listin nykyinen laskettu display
    const currentDisplay = window.getComputedStyle(navList).display;

    if (currentDisplay === 'none') {
      navList.style.display = 'flex'; // näytetään
    } else {
      navList.style.display = 'none'; // piilotetaan
    }
  });
});

