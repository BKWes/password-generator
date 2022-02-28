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

    var numericCharacters = [];
    var specialCharacters = [];
    var lowerCase = [];
    var upperCase = [];
    var chosenPassword = '';
// debugger;
    for (var i = 0; i < pwLength; i++) {

      // consolidate choices into loop with if statemehts
      debugger;
      if (confirmNumber) {
        // numericCharacters = number + number[Math.floor(Math.random() * number.length)];
        numericCharacters += number[Math.floor(Math.random() * number.length)];
        console.log(numericCharacters);
      }
      if (confirmCharacter) {
        specialCharacters += character[Math.floor(Math.random() * character.length)];
        console.log(specialCharacters);
      }
      if (confirmUppercase) {
        upperCase += alpha2[Math.floor(Math.random() * alpha2.length)];
        console.log(upperCase);
      }
      if (confirmLowercase) {
        lowerCase += alpha[Math.floor(Math.random() * alpha.length)];
        console.log(lowerCase);
      }

      var pwCharacters = numericCharacters + specialCharacters + upperCase + lowerCase;

      chosenPassword = chosenPassword + pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
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



// // if 4 negative inputs 
//     if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
//       choices = alert("You need to choose criteria!");
//     }
//   // else if for 4 positive inputs
//     else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase){
//       choices = character.concat(number, alpha, alpha2);
//     }
//   // else if for 3 positive inputs
//     else if (confirmCharacter && confirmNumber && confirmUppercase) {
//       choices = character.concat(number, alpha2);
//     }
//     else if (confirmCharacter && confirmNumber && confirmLowercase) {
//       choices = character.concat(number, alpha);
//     }
//     else if (confirmCharacter && confirmLowercase && confirmUppercase) {
//       choices = character.concat(alpha, alpha2);
//     }
//     else if (confirmNumber && confirmLowercase && confirmUppercase) {
//       choices = number.concat(alpha, alpha2);
//     }
//   // else if for 2 positive inputs
//     else if (confirmNumber && confirmCharacter) {
//       choices = number.concat(character);
//     }
//     else if (confirmNumber && confirmUppercase) {
//       choices = number.concat(alpha2);
//     }
//     else if (confirmNumber && confirmLowercase) {
//       choices = number.concat(alpha);
//     }
//     else if (confirmLowercase && confirmCharacter) {
//       choices = alpha.concat(character);
//     }
//     else if (confirmUppercase && confirmCharacter) {
//       choices = alpha2.concat(character)
//     }
//     else if (confirmUppercase && confirmLowercase) {
//       choices = alpha2.concat(alpha)
//     }
//   // else if for 1 positive input
//     else if (confirmNumber) {
//       choices = number
//     }
//     else if (confirmCharacter) {
//       choices = character
//     }
//     else if (confirmUppercase) {
//       choices = alpha2
//     }
//     else if (confirmLowercase) {
//       choices = alpha
//     };
//     console.log(choices);
  
//   for (var i = 0; i <= pwLength.value; i++) {
//     new choices[Math.floor(Math.random() * choices.length)];
//     pwArray.push([choices]);
//     }
//   console.log(pwArray);


//   };

// var randomPassword = function (choices) {
//   // access choices [] and randomly pull enough characters to satisfy pwlength
//   debugger;
  

// };

// randomly pick characters from choices array to fill password length





// generatePassword()