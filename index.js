function toggleNav() {
  document.getElementById("side-menu").style.display = "flex";
  document.getElementById("navbar-links").style.display = "none";
  document.getElementById("close-button").style.display = "block";
  document.getElementById("toggle-button").style.display = "none";
}
function closeNav() {
  document.getElementById("side-menu").style.display = "none";
  document.getElementById("navbar-links").style.display = "none";
  document.getElementById("toggle-button").style.display = "block";
}

var map = document.getElementById("mymap");
var maplistner = function (e) {
  var frame = document.createElement("iframe");
  frame.src = this.getAttribute("data-src");
  map.appendChild(frame);
  map.removeEventListener("mouseover", maplistner);
};
map.addEventListener("mouseover", maplistner); 