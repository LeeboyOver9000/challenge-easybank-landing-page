const body = document.querySelector("body");
const btnHamburger = document.querySelector("#hamburger-menu");
const divOverlay = document.querySelector(".overlay");
const divMobileMenu = document.querySelector(".mobile_menu");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toggleMenu() {
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    divOverlay.style.opacity = "0";
    divMobileMenu.style.display = "none";
    sleep(300).then(() => {
      divOverlay.style.visibility = "hidden";
    });
  } else {
    btnHamburger.classList.add("open");
    divOverlay.style.visibility = "visible";
    divOverlay.style.opacity = "1";
    sleep(300).then(() => {
      divMobileMenu.style.display = "block";
    });
  }
}

divOverlay.addEventListener("click", toggleMenu);
btnHamburger.addEventListener("click", toggleMenu);
