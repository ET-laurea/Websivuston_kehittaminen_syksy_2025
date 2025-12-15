// Fade in 
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add("loaded");
    });
  });
});

// Fade out 
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (
      href &&
      !href.startsWith("http") &&
      !href.startsWith("#") &&
      !this.hasAttribute("target")
    ) {
      e.preventDefault();
      document.body.classList.remove("loaded");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});

// Aktiivinen linkki
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
      bar.classList.add('animated'); // estää uudelleenanimoinnin
      const progress = bar.getAttribute('data-progress');
      bar.style.width = progress + '%';
      bar.textContent = Math.round(progress) + '%';
    }
  });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);