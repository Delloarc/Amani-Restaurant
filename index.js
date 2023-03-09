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

var karten = document.querySelectorAll(".karten");
var karten_link = document.getElementById("karten-links");

function karten_click() {
  karten[0].style.display = "flex";
}
function karten_close() {
  karten[0].style.display = "none";
}

$(document).ready(function () {
  $(".carousel").carousel();
});

// Speisen Bilder Vergrößerung

var vergroesserung_img = document.querySelectorAll(".vergroesserung-img");
var fullscreen_button = document.querySelectorAll(".fullscreen-button");
var verkleinerung_button = document.getElementById("verkleinerung-button");
body = document.body;

var y = window.matchMedia("(max-width: 1300px)");

function vergroesserung1() {
  vergroesserung_img[0].style.transform = "scale(2.1)";
  vergroesserung_img[0].style.height = "380px";
  fullscreen_button[0].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}
function vergroesserung2() {
  vergroesserung_img[1].style.transform = "scale(2.1)";
  vergroesserung_img[1].style.height = "380px";
  fullscreen_button[1].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}
function vergroesserung3() {
  vergroesserung_img[2].style.transform = "scale(2.1)";
  vergroesserung_img[2].style.height = "380px";
  fullscreen_button[2].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}
function vergroesserung4() {
  vergroesserung_img[3].style.transform = "scale(2.1)";
  vergroesserung_img[3].style.height = "380px";
  fullscreen_button[3].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}
function vergroesserung5() {
  vergroesserung_img[4].style.transform = "scale(2.1)";
  vergroesserung_img[4].style.height = "380px";
  fullscreen_button[4].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}
function vergroesserung6() {
  vergroesserung_img[5].style.transform = "scale(2.1)";
  vergroesserung_img[5].style.height = "380px";
  fullscreen_button[5].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}
function vergroesserung7() {
  vergroesserung_img[6].style.transform = "scale(2.1)";
  vergroesserung_img[6].style.height = "380px";
  fullscreen_button[6].style.display = "none";
  setTimeout(() => {
    verkleinerung_button.style.display = "block";
  }, 250);
}

function verkleinerung() {
  vergroesserung_img.forEach((a) => {
    a.style.transform = "scale(1)";
  });
  if (y.matches) {
    vergroesserung_img.forEach((a) => {
      a.style.height = "400px";
    });
  } else {
    vergroesserung_img.forEach((a) => {
      a.style.height = "580px";
    });
  }

  setTimeout(() => {
    fullscreen_button.forEach((a) => {
      a.style.display = "block";
    });

    verkleinerung_button.style.display = "none";
  }, 250);
}
