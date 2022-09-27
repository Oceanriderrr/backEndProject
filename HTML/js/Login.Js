// function submitButton(){
// let userName = document.getElementById("username").value;
// let PassWord = document.getElementById("password").value;

// fetch()


// }

function validateForm() {
    'use strict';

    // Get references to the form elements:
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    // Validate the login
    if ((email.value.length > 0) && (password.value.length > 0)) {
        return true;
    } else {
        alert('Please complete the form!');
        return false;
    }
}

function check(form) {
// so here we have to check out database and make sure this is the right username and password
//pull username and password from response data to validate the users login;
    var emailArray = ("myemail@live.com", "");
    var passwordArray = ("MyLogIn", "");

//

    if (username.value == "email" && password.value == "password") {
        //if succesfull window.open("my-profile-feed.html")
        window.open('user-profile.html');
    } else {
        alert('Please enter correct username or password!');
        return false;
    }   
}

function init() {
    'use strict';

    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('lgform');
        loginForm.onsubmit = validateForm;
    }
}
window.onload = init;



//------------------------------------------------------------------------------------------

//Signup Function

function SignUpTeacher(){



let userName ;
let country ;

let category;

let password;

let repeatPassword;

let confirm;


}

function SignUpStudent(){
    let student = document.getElementById("stuName").value;


}