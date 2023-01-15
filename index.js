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
  document.getElementById("toggle-button").style.visibility = "hidden";
  document.getElementById("active-side-menu-link").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("close-button").style.display = "none";
  document.getElementById("navbar-links").style.display = "none";
  
  document.getElementById("toggle-button").style.visibility = "visible";
  document.getElementById("active-side-menu-link").style.visibility = "hidden";
}

var x = window.matchMedia("(max-width: 580px)");
