window.addEventListener("load", () => {
  var nav = document.querySelector(".main-nav"); // Identify target
  console.log(nav.he);
  window.addEventListener("scroll", function(event) {
    // To listen for event
    event.preventDefault();

    if (window.scrollY >= this.window.innerHeight - nav.clientHeight) {
      // Just an example
      nav.style.backgroundColor = "#696969"; // or default color
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
});
