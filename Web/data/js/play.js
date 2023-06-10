"use strict";

let check = document.querySelector(".check");
let input = document.querySelector(".year");
let result = document.querySelector(".result");
let text = document.querySelector(".text");
let year;
let wronginput = function () {
  text.classList.remove("hidden");
};
check.addEventListener("click", function () {
  year = parseInt(input.value);
  console.log(year, parseInt("hallo"));
  if (year > 9999 || year < 1000 || Number.isInteger(year) == false) {
    console.log(year);
    wronginput();
  } else {
    text.classList.add("hidden");
    if (year % 4 >= 1 && year % 4 < 4) {
      result.textContent = "NOT LEAP YEAR";
      console.log("not leap year 4");
    } else if (year % 4 === 0) {
      if (year % 100 > 0 && year % 100 < 100) {
        result.textContent = "LEAP YEAR";
        console.log("leap year 100");
      } else if (year % 100 === 0) {
        if (year % 400 > 0 && year % 400 < 400) {
          result.textContent = "NOT LEAP YEAR";
          console.log("not leap year 400");
        } else if (year % 400 === 0) {
          result.textContent = "LEAP YEAR";
          console.log("leap year 400");
        }
      }
    }
  }
});
