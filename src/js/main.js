var buttonMenu = document.querySelector(".button-menu");
var containerHeader = document.querySelector(".container-header");
var openContainerHeader = function () {
  containerHeader.classList.toggle("is-open");
  buttonMenu.classList.toggle("is-active");
};

buttonMenu.addEventListener("click", openContainerHeader);
