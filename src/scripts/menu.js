document.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("expanded");
  });
}
