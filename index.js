function toggleNav() {
  document.getElementById("side-menu").style.display = "flex";

  if (x.matches) {
    // If media query matches
    document.getElementById("side-menu").style.width = "100%";
  } else {
    document.getElementById("side-menu").style.width = "500px";
  }
  document.getElementById("navbar-links").style.display = "none";
  document.getElementById("close-button").style.display = "block";
  document.getElementById("toggle-button").style.display = "none";
  document.getElementById("close-button-img").style.width = "20px";
}

function closeNav() {
  document.getElementById("side-menu").style.width = "0";

  document.getElementById("close-button-img").style.width = "0";
  document.getElementById("toggle-button").style.display = "block";
  document.getElementById("active-side-menu-link").style.paddingLeft = "0";
  document.getElementById("active-side-menu-link").style.paddingRight = "0";
}

var x = window.matchMedia("(max-width: 580px)");


// Image slider

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});