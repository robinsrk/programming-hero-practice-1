// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    document.getElementById('welcome').innerHTML = 'Your Account';
    document.getElementById('transaction-area').style.display = "block";
})

// deposit button event handler
document.getElementById("addDeposit").addEventListener("click", function() {
    // get the amount to deposit
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    //get the current deposit
    const currentDeposit = parseFloat(document.getElementById("currentDeposit").innerText);
    document.getElementById("currentDeposit").innerText = currentDeposit+depositAmount;
    document.getElementById("depositAmount").value = "";
    const currentBalance = parseFloat(document.getElementById("currentBalance").innerText)
    document.getElementById("currentBalance").innerText = currentBalance+depositAmount;
})

// withdraw button event handler
document.getElementById("addWithdraw").addEventListener("click", function() {
    // get the amount to deposit
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    //get the current deposit
    const currentWithdraw = parseFloat(document.getElementById("currentWithdraw").innerText);
    document.getElementById("currentWithdraw").innerText = currentWithdraw+withdrawAmount;
    document.getElementById("withdrawAmount").value = "";
    const currentBalance = parseFloat(document.getElementById("currentBalance").innerText)
    document.getElementById("currentBalance").innerText = currentBalance-withdrawAmount;
})
