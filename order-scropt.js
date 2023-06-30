let myButton = document.getElementById("button");
let myPayment = document.getElementById("payment");
let myCard = document.getElementById("cardinfo");
let myVisa = document.getElementById("visa");
let myMastCard = document.getElementById("mastc");
let myInfo = document.getElementById("card");
let myContinueButton = document.getElementById("continue");
let myArrow = document.getElementById("arrow");

myButton.addEventListener("click", myFunction);
function myFunction() {
  myPayment.style.display = "block";
  myArrow.style.display = "block";
  sessionStorage.setItem("paymentVisible", true);
}

const isPayment = sessionStorage.getItem("paymentVisible");

function callingTheSessionStorage() {
  if (isPayment === "true") {
    myPayment.style.display = "block";
  }
}

callingTheSessionStorage();

myVisa.addEventListener("click", myOtherFunction);
function myOtherFunction() {
  myCard.style.display = "block";
  sessionStorage.setItem("cardVisible", true);
  myArrow.style.display = "none";
}

const isCard = sessionStorage.getItem("cardVisible");

function callingTheSessionStorageAgain() {
  if (isCard === "true") {
    myCard.style.display = "block";
  }
}

callingTheSessionStorageAgain();

myMastCard.addEventListener("click", myOtherFunctionAgain);
function myOtherFunctionAgain() {
  myCard.style.display = "block";
  sessionStorage.setItem("cardIsVisible", true);
  myArrow.style.display = "none";
}

const isTheCard = sessionStorage.getItem("cardIsVisible");

function theSessionStorage() {
  if (isTheCard === "true") {
    myCard.style.display = "block";
  }
}

theSessionStorage();

myInfo.addEventListener("click", myOtherFunctionLast);
function myOtherFunctionLast() {
  myCard.style.display = "block";
  sessionStorage.setItem("cardIsVisibleAgain", true);
  myArrow.style.display = "none";
}

const isMyCard = sessionStorage.getItem("cardIsVisibleAgain");

function theSessionStorageAgain() {
  if (isMyCard === "true") {
    myCard.style.display = "block";
  }
}

theSessionStorageAgain();
