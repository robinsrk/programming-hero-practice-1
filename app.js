const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    document.getElementById('welcome').innerHTML = 'Your Account'
})
console.log("hello Rabby");
