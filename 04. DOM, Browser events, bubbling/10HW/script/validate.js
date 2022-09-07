// вспомогательная функция проверки валидности имейла
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const checkEmail = () => {
  let checkValidateEmail = false;

  const inputEmail = document.querySelector(".form__input-email");
  const inputEmailText = inputEmail.value;
  const examValidateEmail = validateEmail(inputEmailText);
  const emailStar = document.querySelector(".form__input-email-star");
  const emailTitle = document.querySelector(".form__E-mail-title");
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

const checkPassword = () => {
  let checkValidatePass = true;
  return checkValidatePass;
};

// функция проверки согласия с правилами пользования
const examCheckbox = () => {
  let checkValidateCheckbox = false;

  const checkboxElem = document.querySelector(".form__checkbox");
  const checkboxStar = document.querySelector(".form__input-checkbox-star");
  const checkboxSquare = document.querySelector(".form__checkbox-square");
  const checkboxNotCheckedText = document.querySelector(
    ".form__checkbox-not-checked"
  );
  if (checkboxElem.checked === false) {
    checkboxNotCheckedText.style.opacity = "100";
    checkboxStar.style.opacity = "100";
    checkboxSquare.style.border = "2px solid red";
    checkValidateCheckbox = false;
  } else {
    checkboxNotCheckedText.style.opacity = "0";
    checkboxStar.style.opacity = "0";
    checkboxSquare.style.border = "2px solid green";
    checkValidateCheckbox = true;
  }

  return checkValidateCheckbox;
};

const validateReg = () => {
  return checkEmail() && checkPassword() && examCheckbox();
};

// const validateLogin = () => {
//     return checkEmail() && checkPassword()
// }

export { checkEmail, checkPassword, examCheckbox, validateReg };
