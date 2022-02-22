// special characters
var character = ["!", "#", "$", "%", "&", "*", "-", "=", "@", "<", ">", "?", "/", "~", "+" ];
// numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// convert letters to uppercase
var toUpper = function(y) {
  return y.toUpperCase();
};

var alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  enter = parseInt(prompt("Select how long you would like your password. Choose between 8 and 128"));
    // validates user input for too large or small selections
    if (enter < 8 || enter > 128) {
      enter = parseInt(alert("You must choose between 8 and 128"));
      return generatePassword();
    } 
    // require an entry 
    else if (!enter) {
      alert("Please enter a value between 8 and 128")
      return generatePassword();
    }
    // continues if input is valid 
    else {
      var passLength = enter;
      
      console.log("Password length: " + passLength);

      confirmNumber = confirm("Will your password contain numbers?")
      confirmCharacter = confirm("Will your password contain special characters?")
      confirmUppercase = confirm("Will your password contain uppercase letters?")
      confirmLowercase = confirm("Will your password contain lowercase letters?")
    };
// if 4 negative inputs 
    if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
      choices = alert("Please choose a criteria!");
    }
  // else if for 4 positive inputs
    else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase){
      choices = character.concat(number, alpha, alpha2);
    }
  // else if for 3 positive inputs
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
    }
  // else if for 2 positive inputs
    else if (confirmNumber && confirmCharacter) {
      choices = number.concat(character);
    }
    else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
    }
    else if (confirmNumber && confirmLowercase) {
      choices = number.concat(alpha);
    }
    else if (confirmLowercase && confirmCharacter) {
      choices = alpha.concat(character);
    }
    else if (confirmUppercase && confirmCharacter) {
      choices = alpha2.concat(character)
    }
    else if (confirmUppercase && confirmLowercase) {
      choices = alpha2.concat(alpha)
    }
  // else if for 1 positive input
    else if (confirmNumber) {
      choices = number
    }
    else if (confirmCharacter) {
      choices = character
    }
    else if (confirmUppercase) {
      choices = alpha2
    }
    else if (confirmLowercase) {
      choices = alpha
    };
    console.log(choices);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword();