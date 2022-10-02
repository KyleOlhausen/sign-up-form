const fName = document.querySelector('#first_name');
const fNameError = document.querySelector('#first_name_error');
const lName = document.querySelector('#last_name');
const lNameError = document.querySelector('#last_name_error');
const email = document.querySelector('#user_email');
const emailError = document.querySelector('#user_email_error');
const phone = document.querySelector('#phone_number');
const phoneError = document.querySelector('#phone_number_error');
const pw = document.querySelector('#user_password');
const pwError = document.querySelector('#user_password_error');
const confirm_pw = document.querySelector('#confirm_pw');
const confirmPwError = document.querySelector('#confirm_pw_error');





fName.addEventListener("input", () => {
    if(fName.value === ""){
        fNameError.textContent = "*Please enter your first name";
    }
    else{
        fNameError.textContent = "";
    }
});


lName.addEventListener("input", () => {
    if(lName.value === ""){
        lNameError.textContent = "*Please enter your last name";
    }
    else{
        lNameError.textContent = "";
    }
});


email.addEventListener("input", () => {
    if(email.value === ""){
        emailError.textContent = "*Please enter your email";
    }
    else{
        emailError.textContent = "";
    }
});


confirm_pw.addEventListener("input", () => {
    if(confirm_pw.value != pw.value)
    {
        confirmPwError.textContent = "*Passwords must match";
    }
    else{
        confirmPwError.textContent = "";
    }
});


email.addEventListener("input", () => {
    if(email.validity.typeMismatch){
        emailError.textContent = "*Please enter a valid email";   
    }
    else{
        emailError.textContent = "";
    }
});

phone.addEventListener("input", () => {
    if(phone.validity.patternMismatch){
        phoneError.textContent = "*Please enter a 10 digit phone number";
    }
    else{
        phoneError.textContent = "";
    }
});


pw.addEventListener("input", () => {
    if(pw.value.length < 8){
        pwError.textContent = "*Password must be at least 8 characters"
    }
    else{
        pwError.textContent = "";
    }
});