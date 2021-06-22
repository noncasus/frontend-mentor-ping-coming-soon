const pingForm = document.querySelector("#ping-form");
const email = document.querySelector("#email");
const buttonNotify = document.querySelector("#notify");
const spanError = document.querySelector("#warning");
const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

pingForm.addEventListener('submit', (event) => {
    event.preventDefault();
});


buttonNotify.addEventListener('click', () => {
    if ( (email.value == '') || ( (!regEmail.test(email.value)) ) ){
        email.classList.add("email-warning");
        spanError.classList.add("warning-visible");
    } else {
        email.value = "";
        email.classList.remove("email-warning");
        spanError.classList.remove("warning-visible");
    }
});