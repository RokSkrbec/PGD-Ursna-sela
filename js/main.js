window.addEventListener("load", () => {
  const mainNav = document.querySelector(".main-nav");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", function(event) {
    // To listen for event
    event.preventDefault();
    if (window.scrollY >= this.window.innerHeight - mainNav.clientHeight) {
      // Just an example
      mainNav.style.backgroundColor = "rgba(1, 1, 1, 1)"; // or default color
    } else {
      mainNav.style.backgroundColor = "transparent";
    }
  });

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    if (mobileMenu.innerHTML === "meni") {
      mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenu.innerHTML = "meni";
    }
  });
  navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    if (mobileMenu.innerHTML === "meni") {
      mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenu.innerHTML = "meni";
    }
  });
});
