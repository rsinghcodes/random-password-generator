var alertBox = document.querySelector(".alertBox");
function getPassword() {
  var copy = document.querySelector(".copy");
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?";
  var passwordLength = 16;
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
  copy.classList.add("copied");
  alertBox.innerHTML = "Copied Password: " + password;
}

function copyPassword() {
  var copyPassText = document.getElementById("password");
  copyPassText.select();
  copyPassText.setSelectionRange(0, 999);
  document.execCommand("copy");
  setTimeout(function () {
    alertBox.classList.toggle("active");
  }, 300);
}
