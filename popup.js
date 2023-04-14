document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  var slider = document.getElementById("password-length");
  var lengthDisplay = document.getElementById("password-length-display");
  var generateBtn = document.getElementById("generate-password");
  var copyBtn = document.getElementById("copy-password");
  var passwordInput = document.getElementById("generated-password");

  // Update password length display when slider value changes
  slider.addEventListener("input", function () {
    lengthDisplay.textContent = slider.value;
  });

  // Generate a new password when generate button is clicked
  generateBtn.addEventListener("click", function () {
    var length = slider.value;
    var password = generateRandomPassword(length);
    passwordInput.value = password;
  });

  // Copy password to clipboard when copy button is clicked
  copyBtn.addEventListener("click", function () {
    passwordInput.select();
    document.execCommand("copy");
  });

  // Generate a random password with the given length
  function generateRandomPassword(length) {
    var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }
});
