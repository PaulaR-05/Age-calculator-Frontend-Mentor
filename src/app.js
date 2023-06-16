const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const dayOutput = document.getElementById("dayOut");
const monthOutput = document.getElementById("monthOut");
const yearOutput = document.getElementById("yearOut");
const formCheck = document.querySelector("form");

formCheck.addEventListener("submit", checkFormSub);

const date = new Date();
let thisDay = date.getDate();
let thisMonth = 1 + date.getMonth();
let thisYear = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31];
function validateUserInfo() {
  const inputField = document.querySelectorAll("input");
  let checkValue = true;
  inputField.forEach((i) => {
    const ele = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "#ff5757";
      ele.querySelector("small").innerText = "this field is required.";
      checkValue = false;
    } else if (dayInput.value > 31 && monthInput.value > 12) {
      dayInput.style.borderColor = "#ff5757";
      monthInput.style.borderColor = "#ff5757";
      dayInput.parentElement.querySelector("small").innerText =
        "must be a valid day.";
      monthInput.parentElement.querySelector("small").innerText =
        "must be a valid month.";
      checkValue = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "#ff5757";
      monthInput.parentElement.querySelector("small").innerText =
        "must be a valid month.";
      checkValue = false;
    } else if (dayInput.value > 31) {
      dayInput.style.borderColor = "#ff5757";
      dayInput.parentElement.querySelector("small").innerText =
        "must be a valid day.";
      checkValue = false;
    } else {
      i.style.borderColor = "black";
      ele.querySelector("small").innerText = "";
      checkValue = true;
    }
  });
  return checkValue;
}

function checkFormSub(e) {
  e.preventDefault();
  if (validateUserInfo()) {
    if (dayInput.value > thisDay) {
      thisDay = thisDay + months[thisMonth - 1];
      thisMonth = thisMonth - 1;
    }
    if (monthInput.value > thisMonth) {
      thisMonth = thisMonth + 12;
      thisYear = thisYear - 1;
    }
    const dayCheck = thisDay - dayInput.value;
    const monthCheck = thisMonth - monthInput.value;
    const yearCheck = thisYear - yearInput.value;

    dayOutput.innerHTML = dayCheck;
    monthOutput.innerHTML = monthCheck;
    yearOutput.innerHTML = yearCheck;
  }
}
