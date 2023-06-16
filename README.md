# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./assets/images/live_url.mp4)

### Links

- [Solution URL:](https://github.com/PaulaR-05/Age-calculator-Frontend-Mentor)
- [Live Site URL: ](https://paular-05.github.io/Age-calculator-Frontend-Mentor/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

```js
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
```

## Author

- Website - [Gabriela](https://github.com/PaulaR-05)
- Frontend Mentor - [Gabriela](https://www.frontendmentor.io/profile/PaulaR-05)
- Linkedin - [Gabriela](https://www.linkedin.com/in/gabriela-de-paula-340a9027a/)
