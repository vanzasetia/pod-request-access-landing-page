(function () {
  'use strict';
  const heroForm = document.querySelector('.js-heroForm');
  const heroInput = document.querySelector('.js-heroInput');
  const heroAlert = document.querySelector('.js-heroAlert');

  const showAlertMessage = alertMessage => {
    heroAlert.textContent = alertMessage;
    heroAlert.removeAttribute('hidden');
    heroAlert.setAttribute('role', 'alert');
  };

  const hideAlertMessage = () => {
    heroAlert.textContent = '';
    heroAlert.setAttribute('hidden', '');
    heroAlert.removeAttribute('role');
  };

  const validateEmail = event => {
    const emailValidation =
      /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
    const isEmailInvalid = !emailValidation.test(heroInput.value);
    const message =
      isEmailInvalid && heroInput.value
        ? 'Oops! Please check your email'
        : 'Oops! Please add your email';
    if (isEmailInvalid) {
      event.preventDefault();
      if (heroInput.value) {
        showAlertMessage(message);
        setTimeout(hideAlertMessage, 5000);
      } else {
        showAlertMessage(message);
        setTimeout(hideAlertMessage, 5000);
      }
    }
  };

  heroForm.addEventListener('submit', validateEmail);
})();
