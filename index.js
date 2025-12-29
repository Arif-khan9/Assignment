const icons = document.getElementsByClassName("btn__icon");
const buttons = document.getElementsByClassName("btn");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function (e) {
    e.stopPropagation();
    buttons[i].classList.toggle("active");
  });
}
