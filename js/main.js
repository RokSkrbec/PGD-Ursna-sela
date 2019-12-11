window.addEventListener("load", () => {
  const mainNav = document.querySelector(".main-nav");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", function(event) {
    // To listen for event
    event.preventDefault();
    if (window.scrollY >= this.window.innerHeight - mainNav.clientHeight) {
      // Just an example
      mainNav.style.backgroundColor = "#403F4C"; // or default color
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

  const startPageRotatingText = ["Z", "gasilskim", "pozdravom", "na", "pomoč!"];
  const startPageRotatingTextLength = startPageRotatingText.length;
  let startPageRotatingTextIndex = 0;
  setInterval(() => {
    document.querySelector(".rotating-text").innerHTML =
      startPageRotatingText[startPageRotatingTextIndex];
    startPageRotatingTextIndex =
      (startPageRotatingTextIndex + 1) % startPageRotatingTextLength;
  }, 700);

  const startPageRotatingImages = [
    "./images/start-page-image-01.svg",
    "./images/start-page-image-02.jpg",
    "./images/start-page-image-03.jpg",
    "./images/start-page-image-04.jpg"
  ];
  const startPageRotatingImagesLength = startPageRotatingImages.length;
  let startPageRotatingImagesIndex = 0;
  setInterval(() => {
    document.querySelector(".start-page-image img").src =
      startPageRotatingImages[startPageRotatingImagesIndex];
    startPageRotatingImagesIndex =
      (startPageRotatingImagesIndex + 1) % startPageRotatingImagesLength;
    console.log(startPageRotatingImages[startPageRotatingImagesIndex].src);
  }, 700);
});
