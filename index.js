
/*let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id ("firstName"),
    lastName = id ("lastName"),
    email = id ("email"),
    password = id ("password"),
    form = id("form"),
    errorMsg = classes("error"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(firstName, 0, "First name cannot be empty");
    engine(lastName, 1, "Last Name connot be empty");
    engine(email, 2, "Looks like this is not an email");
    engine(password, 3, "Password cannot be empty");
});

function engine(id, serial, message) {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        id.style.color = "red";
        failureIcon[serial].style.opacity = "1";

    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";

    }
}*/

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const failureIcon = inputControl.querySelector('.failure-icon');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succes');
    failureIcon.style.opacity = "1";
};

const setSucces = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const failureIcon = inputControl.querySelector('.failure-icon');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    failureIcon.style.opacity = "0";
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

if (firstNameValue === ''){
    setError(firstName, 'First Name cannot be empty');

} else {
    setSucces(firstName);
};

if (lastNameValue === ''){
    setError(lastName, 'Last Name cannot be empty');

} else {
    setSucces(lastName);
};

if (emailValue === ''){
    setError(email, 'Email cannot be empty');
} else if (!isValidEmail(emailValue)){
    setError (email, 'Looks like this is not an email address')
} else {
    setSucces(email);
};

if (passwordValue === ''){
    setError(password, 'Password cannot be empty');
} else {
    setSucces (password);
    
}};



