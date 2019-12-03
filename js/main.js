window.addEventListener("load", () => {
  const nav = document.querySelector(".main-nav"); // Identify target
  window.addEventListener("scroll", function(event) {
    // To listen for event
    event.preventDefault();
    if (window.scrollY >= this.window.innerHeight - nav.clientHeight) {
      // Just an example
      nav.style.backgroundColor = "rgba(1, 1, 1, 1)"; // or default color
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    if (mobileMenu.innerHTML === "meni") {
      mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenu.innerHTML = "meni";
    }
  });
});
