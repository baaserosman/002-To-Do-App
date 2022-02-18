//? ************ SELECTORS ****************************

const listItem = document.querySelectorAll(".text");
const check = document.querySelectorAll(".fa-check");
const revert = document.querySelectorAll(".fa-clock-rotate-left");

for (let i in check) {
  check[i].onclick = () => {
    listItem[i].style.backgroundImage = "linear-gradient(  #2e5f5c, #546d6b)";
    listItem[i].style.textDecoration = "line-through 2px red";
    listItem[i].style.color = "#30282881";
  };
}

for (let i in revert) {
  revert[i].onclick = () => {
    listItem[i].style.backgroundImage =
      "linear-gradient(to right, #546d6b, #2e5f5c)";

    listItem[i].style.textDecoration = "none";
    listItem[i].style.color = "rgba(255, 255, 255, 0.611)";
  };
}
