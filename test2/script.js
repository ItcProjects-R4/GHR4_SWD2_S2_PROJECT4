var form = document.getElementById("registerForm");

var togglePass = document.getElementById("togglePass");
var password = document.getElementById("password");

var toggleConfirm = document.getElementById("toggleConfirm");
var confirmPass = document.getElementById("confirmPass");

// Show/Hide Password
togglePass.addEventListener("click", function(){
if(password.type==="password"){
password.type="text";
togglePass.classList.replace("fa-eye","fa-eye-slash");
}else{
password.type="password";
togglePass.classList.replace("fa-eye-slash","fa-eye");
}
});

toggleConfirm.addEventListener("click", function(){
if(confirmPass.type==="password"){
confirmPass.type="text";
toggleConfirm.classList.replace("fa-eye","fa-eye-slash");
}else{
confirmPass.type="password";
toggleConfirm.classList.replace("fa-eye-slash","fa-eye");
}
});

// Validation
form.addEventListener("submit", function(e){
e.preventDefault();

var fullname = document.getElementById("fullname").value.trim();
var username = document.getElementById("username").value.trim();
var email = document.getElementById("email").value.trim();
var phone = document.getElementById("phone").value.trim();
var pass = password.value.trim();
var confirm = confirmPass.value.trim();

var nameError = document.getElementById("nameError");
var usernameError = document.getElementById("usernameError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var passError = document.getElementById("passError");
var confirmError = document.getElementById("confirmError");
var success = document.getElementById("success");

// Reset
nameError.innerText="";
usernameError.innerText="";
emailError.innerText="";
phoneError.innerText="";
passError.innerText="";
confirmError.innerText="";
success.innerText="";

// Validation logic
if(fullname.length<3){ nameError.innerText="Full Name must be at least 3 letters"; return;}
if(username.length<3){ usernameError.innerText="Username must be at least 3 letters"; return;}
if(email==="" || !email.includes("@")){ emailError.innerText="Enter a valid Email"; return;}
if(phone.length!==10 || isNaN(phone)){ phoneError.innerText="Enter a valid 10-digit phone"; return;}
if(pass.length<6){ passError.innerText="Password must be at least 6 characters"; return;}
if(pass!==confirm){ confirmError.innerText="Passwords do not match"; return;}

success.innerText="Registration Successful ✅";

});