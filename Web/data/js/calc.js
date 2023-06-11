//triprhoyda;
"use strict";
//initializing and declaring element classes from the html file
let screen = document.querySelector(".calc");
let answer = document.querySelector(".answer");
let btns = document.querySelectorAll(".num");
let cl = document.querySelector(".clear");
let solve = document.querySelector(".solve");
let sub = document.querySelector(".sub");
let mult = document.querySelector(".mult");
let div = document.querySelector(".div");
let sum = document.querySelector(".sum");
let inputs = [3];
let a = "";
let b = "";

//functions for addition
let add = function (x, y) {
  answer = x + y;
  return answer;
};
//function for clearing the screen
const clear = function () {
  //clearing text content
  screen.textContent = "0";
  answer.textContent = "0";
  a = "";
  b = "";
};
//loop that allows keys to be pressed as many times as possible and still get the data
for (let i = 0; i < btns.length; i++) {
  //event listener for clicks from the mouse
  btns[i].addEventListener("click", function () {
    //getting the number from the clicks
    a += btns[i].textContent;
    //adding the collected number into the inputs array at position 0
    inputs[0] = a;
    //adding the number onto the screen
    screen.textContent = a;
    console.log(a);
  });
}
//event listener for clicks on the adding key
sum.addEventListener("click", function () {
  //adding the "+" symbol on the screen
  screen.textContent += sum.textContent;
  //adding the value of a into the array
  inputs[0] = a;
  a = "";
  //adding symbol in array
  inputs[1] = "+";
  console.log(inputs);

  //for the next session the calculator needs to add
});
//adding an event listener on the cl button so that when it is pressed it calls the clear function above
cl.addEventListener("click", clear);
