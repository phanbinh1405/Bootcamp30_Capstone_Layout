// SCROLL UP

let scrollUp = document.querySelector(".scrollup");
function showScroll() {
  window.scrollY >= 560
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", showScroll);
