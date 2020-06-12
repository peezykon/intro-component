const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
// var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// var checkEmail = re.test(String(emailValue).toLowerCase());

form.addEventListener("submit", e => {
    e.preventDefault();

    // hide error
    hideError(firstname);
    hideError(lastname);
    hideError(email);
    hideError(password);

    // get value
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue && lastnameValue && emailValue && passwordValue) {

    } else {
        switch ("") {
            case firstnameValue:
                showError(firstname, "First Name cannot be empty");
            case lastnameValue:
                showError(lastname, "Last Name cannot be empty");
            case emailValue:
                showError(email, "Looks like this is not an email");
            case passwordValue:
                showError(password, "Password cannot be empty");
        }
    }
});

function showError(input, message) {
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector('.error-msg');
    formControl.className = 'form-control error';
    errorMsg.innerText = message;
};

function hideError(input) {
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector('.error-msg');
    formControl.className = 'form-control';
    errorMsg.innerText = "";
};