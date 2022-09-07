// функция присвоения данных пользователя объекту
const userData = {
  email: "",
  password: "",
};

// вспомогательная функция проверки валидности имейла
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
// Здесь new RegExp генерируется динамически, чтобы находить ; name=<value>.

const checkEmail = (email) => {
  let checkValidateEmail = false;

  const inputEmail = document.querySelector(".form__input-email");
  const inputEmailText = inputEmail.value;
  const examValidateEmail = validateEmail(inputEmailText);
  const emailStar = document.querySelector(".form__input-email-star");
  const emailTitle = document.querySelector(".form__e-mail-title");
  const textEmailWrong = document.querySelector(
    ".form__input-email-validate-text-wrong"
  );

  if (inputEmailText.length === 0) {
    inputEmail.style.border = "1px solid #ff0000";
    emailStar.style.color = "red";
    emailStar.style.opacity = "100";
    emailTitle.style.color = "red";
    textEmailWrong.style.opacity = "100";
    textEmailWrong.innerHTML = "* Поле обязательно для заполнения";
    checkValidateEmail = false;
  } else if (email !== inputEmailText) {
    inputEmail.style.border = "1px solid #ff0000";
    emailStar.style.color = "red";
    emailStar.style.opacity = "100";
    emailTitle.style.color = "red";
    textEmailWrong.style.opacity = "100";
    textEmailWrong.innerHTML = "* Почта не зарегестрирована";
    checkValidateEmail = false;
  } else if (examValidateEmail === false) {
    inputEmail.style.border = "1px solid #ff0000";
    emailStar.style.color = "red";
    emailStar.style.opacity = "100";
    emailTitle.style.color = "red";
    textEmailWrong.style.opacity = "100";
    textEmailWrong.innerHTML = "* Вы ввели неккоректный Email";
    checkValidateEmail = false;
  } else {
    inputEmail.style.border = "1px solid green";
    emailStar.style.color = "#787878";
    emailTitle.style.color = "green";
    emailStar.style.opacity = "0";
    textEmailWrong.style.opacity = "0";
    checkValidateEmail = true;
    return inputEmailText;
  }

  return "";
};

const checkPassword = (password) => {
  let checkValidatePass = true;
  const inputPassword = document.querySelector(".form__input-password");
  const inputPasswordText = inputPassword.value;
  const passwordLabel = document.querySelector(".form__password-title");
  const textPasswordWrong = document.querySelector(
    ".form__input-password-validate-text-wrong"
  );

  if (inputPasswordText.length === 0) {
    passwordLabel.style.color = "red";
    checkValidatePass = false;
  } else if (password !== inputPasswordText) {
    passwordLabel.style.color = "red";
    checkValidatePass = false;
  } else if (inputPasswordText.length < 8) {
    passwordLabel.style.color = "red";
    checkValidatePass = false;
  } else {
    checkValidatePass = true;
    return inputPasswordText;
  }

  return "";
};

// функция проверки согласия с правилами пользования
const examCheckbox = () => {
  let checkValidateCheckbox = false;

  const checkboxElem = document.querySelector(".form__checkbox");
  const checkboxStar = document.querySelector(".form__input-checkbox-star");
  const checkboxSquare = document.querySelector(".form__checkbox-square");
  //   const checkboxNotCheckedText = document.querySelector(
  //     ".form__checkbox-not-checked"
  //   );
  if (checkboxElem.checked === false) {
    // checkboxNotCheckedText.style.opacity = "100";
    checkboxStar.style.opacity = "100";
    checkboxSquare.style.border = "2px solid red";
    checkValidateCheckbox = false;
  } else {
    // checkboxNotCheckedText.style.opacity = "0";
    checkboxStar.style.opacity = "0";
    checkboxSquare.style.border = "2px solid green";
    checkValidateCheckbox = true;
  }

  return checkValidateCheckbox;
};

const setUserData = (userEmail, userPassword) => {
  userData.email = userEmail;
  userData.password = userPassword;
};

const getUserData = () => JSON.parse(localStorage.getItem("user"));

const validateReg = (userEmail, userPassword, useOfTerms) => {
  if (userEmail && userPassword && useOfTerms) {
    setUserData(userEmail, userPassword);
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }
};

const validateLogin = (isValidEmail, isValidPassword, acceptDistribution) => {
  if (isValidEmail && isValidPassword) {
    if (acceptDistribution) {
      setCookie("acceptDistribution", "true", {
        secure: true,
        "max-age": "120",
      });
      document.location.replace(
        "http://127.0.0.1:5500/04.%20DOM,%20Browser%20events,%20bubbling/10HW/index.html"
      );
    }

    setCookie("user", localStorage.getItem("user"), {
      secure: true,
      "max-age": "60",
    });

    document.location.replace(
      "http://127.0.0.1:5500/04.%20DOM,%20Browser%20events,%20bubbling/10HW/index.html"
    );
  } else {
    const textPasswordWrong = document.querySelector(
      ".form__input-password-validate-text-wrong"
    );

    textPasswordWrong.innerHTML = "* Пароль или email неверны";
    textPasswordWrong.style.color = "red";
    textPasswordWrong.style.opacity = "100";
  }
};

const registrationHandler = (event) => {
  event.preventDefault();
  const email = checkEmail();
  const password = checkPassword();
  const useOfTerms = examCheckbox();
  validateReg(email, password, useOfTerms);
};

// const regButton = document.querySelector("#reg-submit");

// regButton.addEventListener("click", registrationHandler);

const loginHandler = (event) => {
  event.preventDefault();
  const { email, password } = getUserData();
  const isValidEmail = checkEmail(email);
  const isValidPassword = checkPassword(password);
  const acceptDistribution = examCheckbox();

  validateLogin(isValidEmail, isValidPassword, acceptDistribution);
};

const loginButton = document.querySelector("#login-submit");

loginButton.addEventListener("click", loginHandler);

const toFormBtnHandler = (event) => {
  const formId = event.target.id;
  console.log(event.target.id);

  const signInForm = document.querySelector(".form-container-sign-in");
  const signUpForm = document.querySelector(".form-container-sign-up");

  if (formId === "toSignIn") {
    signInForm.classList.add("form-container_visible");
    signUpForm.classList.remove("form-container_visible");
  } else {
    signInForm.classList.remove("form-container_visible");
    signUpForm.classList.add("form-container_visible");
  }
  //   signInForm.classList.add("form-container_visible");
  //   signInForm.style.display = formId === "toSignIn" ? "block" : "none";
  //   signUpForm.style.display = formId === "toSignUp" ? "block" : "none";
};

const toSignInBtn = document.querySelector("#toSignIn");

toSignInBtn.addEventListener("click", toFormBtnHandler);

const toSignUpBtn = document.querySelector("#toSignUp");

toSignUpBtn.addEventListener("click", toFormBtnHandler);
