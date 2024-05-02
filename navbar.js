function navbarToggle() {
  overlay = document.getElementById("navbar-page-overlay");
  if (overlay.classList.contains("navbar-page-overlay-show")) {
    overlay.classList.remove("navbar-page-overlay-show");
  } else {
    overlay.classList.add("navbar-page-overlay-show");
  }
}