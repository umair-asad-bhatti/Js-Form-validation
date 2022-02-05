const id = (id) => { return document.getElementById(id) }
const classes = (classes) => { return document.getElementsByClassName(classes) }

let username = id("username"),
    email = id("email"),
    password = id("password"),
    successIcons = classes("success-icon"),
    failureIcons = classes("failure-icon"),
    form = id("form"),
    errors = classes("error")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation(username, "Username cannot be blank", 0);
    validation(email, "Email cannot be blank", 1);
    validation(password, "Password cannot be blank", 2);

})


const validation = (factor, msg, vector) => {
    if (factor.value.trim() === "") {
        errors[vector].innerHTML = msg
        failureIcons[vector].style.opacity = "1"
        successIcons[vector].style.opacity = "0";
    } else {
        errors[vector].innerHTML = ""
        failureIcons[vector].style.opacity = "0"
        successIcons[vector].style.opacity = "1";
    }
}