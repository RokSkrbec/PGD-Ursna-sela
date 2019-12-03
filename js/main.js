window.addEventListener("load", () => {
  var nav = document.querySelector(".main-nav"); // Identify target
  console.log(nav.he);
  window.addEventListener("scroll", function(event) {
    // To listen for event
    event.preventDefault();

    if (window.scrollY >= this.window.innerHeight - nav.clientHeight) {
      // Just an example
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // or default color
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });
});
