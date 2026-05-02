"use strict";
const dark = document.querySelector(".dark");
const btnAll = document.querySelector(".btn-all");
const btnActive = document.querySelector(".btn-active");
const btnInactive = document.querySelector(".btn-inactive");
const toggles = document.querySelectorAll(".toggle");
const carts = document.querySelectorAll(".carts");
const remove = document.querySelectorAll(".btn-remove");
const btn = document.querySelector(".theme");
const btnRecycle = document.querySelector(".btn-recycle");
const message = document.querySelector(".err-massage");
const check = document.querySelector(".check");
const pro = document.querySelector(".project");
const age = document.querySelector(".age-input");
const name_ = document.querySelector(".name-input");
const password_ = document.querySelector("#password");
const after = document.querySelector(".aftercheck");
const user_simple = document.querySelector(".user-simple");
const timeLog = document.querySelector(".time-log");
console.log(timeLog);
btn.addEventListener("click", () => {
  dark.classList.toggle("dark");
  const licon = btn.querySelector(".light-icon");
  const dicon = btn.querySelector(".dark-icon");
  licon.hidden = !licon.hidden;
  dicon.hidden = !dicon.hidden;
});

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    toggle.parentElement.classList.toggle("active");
  });
});
remove.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".carts").style.display = "none";
  });
});
btnAll.addEventListener("click", () => {
  carts.forEach((cart) => {
    cart.style.display = "block";
  });
  if (message.style.display === "block") {
    message.style.display = "none";
  } else {
    message.style.display = "none";
  }
});
btnActive.addEventListener("click", () => {
  carts.forEach((cart) => {
    const toggle = cart.querySelector(".toggle");
    if (toggle.classList.contains("active")) {
      cart.style.display = "block";
    } else {
      cart.style.display = "none";
    }
  });
});
btnInactive.addEventListener("click", () => {
  let found = false;

  carts.forEach((cart) => {
    const toggle = cart.querySelector(".toggle");

    if (!toggle.classList.contains("active")) {
      cart.style.display = "block";
      found = true;
    } else {
      cart.style.display = "none";
    }
  });

  if (found) {
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
});
import { person } from "./import.js";
console.log(person);
check.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  console.log("clicked");
  const namecheck = name_.value.trim() === person.name;
  const agecheck = parseInt(age.value) == person.age;
  const passwordcheck = password_.value == person.password;
  const error = document.querySelector(".error-box");
  if (namecheck && agecheck && passwordcheck) {
    pro.style.display = "block";
    after.style.display = "none";
    error.style.display = "none";
  } else {
    pro.style.display = "none";
    console.log("error");
    after.style.display = "none";
    error.style.display = "block";
    document.querySelector("body").style.height = "100vh";
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});

const pass = document.getElementById("password");
const btnpass = document.getElementById("toggleBtn");
btnpass.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    btnpass.innerText = "Hide";
  } else {
    pass.type = "password";
    btnpass.innerText = "Show";
  }
});

user_simple.addEventListener("click", () => {
  pro.style.display = "block";
  after.style.display = "none";

  let timeLeft = 60;

  let countdown = setInterval(() => {
    timeLog.innerHTML = `Time Left: ${timeLeft} sec`;
    if (timeLeft > 30) {
      timeLog.style.color = "white";
    } else if (timeLeft > 10) {
      timeLog.style.color = "yellow";
    } else {
      timeLog.style.color = "red";
      timeLog.style.animation = "blink 0.6s infinite";
    }

    if (timeLeft <= 0) {
      clearInterval(countdown);
      location.reload();
      pro.style.display = "none";
      after.style.display = "block";

      timeLog.innerHTML = "Time is over ⏰";
      timeLog.style.color = "red";
    }

    timeLeft--;
  }, 1000);
});
