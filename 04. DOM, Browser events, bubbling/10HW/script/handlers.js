import {
  checkEmail,
  checkPassword,
  examCheckbox,
  validateReg,
} from "./validate.js";

// функция присвоения данных пользователя объекту
const userData = {
  email: "",
  password: "",
};

const setUserData = (userEmail, userPassword) => {
  userData.email = userEmail;
  userData.password = userPassword;
};

const validateReg = (userEmail, useOfTerms) => {
  if (userEmail && useOfTerms) {
    setUserData(userEmail, "userPassword");
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }
};

const clickOnRegButton = document.querySelector(".form__submit-button");

clickOnRegButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = checkEmail();
  //   checkPassword();
  const useOfTerms = examCheckbox();
  validateReg(email, useOfTerms);
});
