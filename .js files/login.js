
const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');

const login = document.querySelector('#login');


// returns true if the input argument is empty:
const isRequired = value => value === '' ? false : true;


// password requirements: atleast 1 uppercase, at least 1 special character, at least 1 digit
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


// highlights the border of the input field and displays an error message if the input field is invalid
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};


// shows the success indicator is similar to the showError() function
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


// check username
const checkUsername = () => {

    let valid = false;
    const user = usernameEl.value.trim();

    if (!isRequired(user)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!("@umsystem.edu") in user) {
        showError(usernameEl, 'Username have to have @umsystem.edu at the end.');
    } else {
        showSuccess(usernameEl);
        valid = true;
    }

    return valid;
}


// check password
const checkPassword = () => {

    let valid = false;
    const pass = passwordEl.value.trim();

    if (!isRequired(pass)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(pass)) {
        showError(passwordEl, 'Please check the password requirement.');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
}


login.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});


