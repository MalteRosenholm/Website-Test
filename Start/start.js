const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");



loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "malros0909" && password === "Logon123") {
        window.location.href = "../index/index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function passwordVisibility(){
    const passinput = document.getElementById("passInput");
    const passBtn = document.getElementById("pass-btn")

    if (passinput.type === "password") {
        passinput.type = "text";
        passBtn.classList.toggle("active")
    } else {
        passinput.type = "password";
        passBtn.classList.remove("active")
    }
}
