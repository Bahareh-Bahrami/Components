"use strict";
//Selecting Elements
const icon = document.querySelectorAll(".icon");
console.log(icon);
const hiddenBox = document.querySelectorAll(".hidden-box");
const item = document.querySelectorAll(".item");
const text = document.querySelectorAll(".text");
const number = document.querySelectorAll(".number");

//click to open and close

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {
    hiddenBox[i].classList.toggle("not-hidden");

    item[i].classList.toggle("add-border");
    text[i].classList.toggle("color");
    number[i].classList.toggle("color");
  });
}
