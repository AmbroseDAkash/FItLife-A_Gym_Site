'use strict';



/**
 * add event on element
 */
const addEventOnElem = function(elem,type,callback){
  if(elem.length>1){
    for(let i = 0;i<elem.length;i++){
      elem[i].addEventListener(type,callback);
    }
  }
  else{
    elem.addEventListener(type,callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelector("[data-nav-link]");

const toggleNavbar = function(){navbar.classList.toggle("active");}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function(){ navbar.classList.toggle("active");}
addEventOnElem(navLinks,"click",closeNavbar);




/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * BMI calculator
 */



document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  
  var bmi = weight / Math.pow(height / 100, 2);
  
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);
});