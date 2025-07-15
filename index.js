const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.login-button');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    input.classList.add('login-form__input--error');
    let errorElem = input.parentElement.querySelector('.login-form__error');
    if (!errorElem) {
        errorElem = document.createElement('div');
        errorElem.className = 'login-form__error';
        input.parentElement.appendChild(errorElem);
    }
    errorElem.innerText = message;
}

function validateInput(input) {
    if (loginButton.disabled) {
        input.classList.remove('login-form__input--error');
        const errorElem = input.parentElement.querySelector('.login-form__error');
        if (errorElem) errorElem.remove();
    }
}

function updateButtonState() {
    const emailVal = emailInput.value.trim();
    const passwordVal = passwordInput.value.trim();
    const emailValid = isValidEmail(emailVal);
    const passwordValid = passwordVal.length > 0;
    if (emailValid && passwordValid) {
        loginButton.disabled = false;
        loginButton.classList.remove('login-button--disabled');
    }
}

loginButton.addEventListener('click', function(e) {
    let valid = true;

    const emailVal = emailInput.value.trim();
    if (!isValidEmail(emailVal)) {
        showError(emailInput, "Please enter a valid email address.");
        valid = false;
    }
    const passwordVal = passwordInput.value.trim();
    if (passwordVal.length === 0) {
        showError(passwordInput, "Password cannot be blank");
        valid = false;
    }

    if (!valid) {
        loginButton.disabled = true;
        loginButton.classList.add('login-button--disabled');
    } else {
        alert("Logged In successfully!");
    }
});

emailInput.addEventListener('input', function() {
    validateInput(emailInput);
    updateButtonState();
});

passwordInput.addEventListener('input', function() {
    validateInput(passwordInput);
    updateButtonState();
});

