// special characters
var character = ["!", "#", "$", "%", "&", "*", "-", "=", "@", "<", ">", "?", "/", "~", "+" ];
// numeric characters
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// convert letters to uppercase
var toUpper = function(y) {
  return y.toUpperCase();
};

var alpha2 = alpha.map(toUpper);

var choices = [];
var pwArray = [];
var password = "";
const pwLength = {};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {

  const pwLength = parseInt(prompt("Select how long you would like your password. Choose between 8 and 128"));
    // validates user input for too large or small selections
    if (pwLength < 8 || pwLength > 128) {
      pwLength = parseInt(alert("You must choose between 8 and 128"));
      return generatePassword();
    } 
    // require an entry 
    else if (!pwLength) {
      alert("Please enter a value between 8 and 128")
      return generatePassword();
    }
    // continues if input is valid 
    else {
      console.log("Password length: " + pwLength);

      var confirmNumber = confirm("Click OK to confirm including numbers?");
      var confirmCharacter = confirm("Click OK to confirm including special characters?");
      var confirmUppercase = confirm("Click OK to confirm including uppercase letters?");
      var confirmLowercase = confirm("Click OK to confirm including lowercase letters?");
    };
      while (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
        alert("You must select at least one character");
        confirmNumber = confirm("Click OK to confirm including numbers?");
        confirmCharacter = confirm("Click OK to confirm including special characters?");
        confirmUppercase = confirm("Click OK to confirm including uppercase letters?");
        confirmLowercase = confirm("Click OK to confirm including lowercase letters?");
      }

    var numericCharacters = [,];
    var specialCharacters = [,];
    var lowerCase = [,];
    var upperCase = [,];
    var chosenPassword = '';
// debugger;
    for (var i = 0; i < pwLength; i++) {

      // consolidate choices into loop with if statemehts
      debugger;
      if (confirmNumber) {
        // numericCharacters = number + number[Math.floor(Math.random() * number.length)];
        for (var i = 0; i < number.length; i++) {
        numericCharacters += number[Math.floor(Math.random() * number.length)];
        }
        console.log(numericCharacters); // only returning a single value
      }
      if (confirmCharacter) {
        for (var i = 0; i < character.length; i++) {
        specialCharacters += character[Math.floor(Math.random() * character.length)];
        }
        console.log(specialCharacters); // only returning a single value
      }
      if (confirmUppercase) {
        for (var i = 0; i < alpha2.length; i++) {
        upperCase += alpha2[Math.floor(Math.random() * alpha2.length)];
        }
        console.log(upperCase); // only returning a single value
      }
      if (confirmLowercase) {
        for (var i = 0; i < alpha.length; i++) {
        lowerCase += alpha[Math.floor(Math.random() * alpha.length)];
        }
        console.log(lowerCase); // only returning a single value
      }

      var pwCharacters = numericCharacters + specialCharacters + upperCase + lowerCase;

      for (var i = 0; i < pwLength; i++) {

      chosenPassword = chosenPassword + pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
      }
      console.log(chosenPassword);

      return chosenPassword;

    }
}

    // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
