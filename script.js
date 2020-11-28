// DECLARING OF VARIABLES FOR PASSWORD AND BUTTON
var passwordText = document.getElementById("password");
var submitBtn = document.getElementById("passBtn1");

// adding event listner if clicked preventing defoult events(click event)
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  listOfPassword();
});

// Declaring of variables for password character choices

var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCases = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specials = "!#$%&'()*+,-./:;<=>?@[\]^_'{|}~".split("");
// variable for password array holder
var availPasswordChoice = [];



// ask a user the length of the password he/she want's

function listOfPassword() {

    var passwordLength1 = prompt("How many characters would you like in your password?");

    // change the input of a user to an integers!!


   passwordLength1 = parseInt(passwordLength1);
   
   while ( passwordLength1 < 8 || passwordLength1 > 128)

        passwordLength1 = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");

    
    // confirm whether a user would use upper letter characterstics
    var upperCase = confirm ("would you like upper case letters in your password?\nok = yes;cancel = No");
        
    if (upperCase) {

        availPasswordChoice = availPasswordChoice.concat(upperCases);

        console.log(availPasswordChoice);
        
        }
    // confirm whether a user would use lower letter characterstics.
    var lowerCase = confirm ("would you like lower case letters in your password?\nok = yes;cancel = No");

    if (lowerCase) {

        availPasswordChoice = availPasswordChoice.concat(lowerCases);

        console.log(availPasswordChoice);
    
    }
    // confirm whether a user would use number characterstics.
    var numberString = confirm ("would you like numbers characters in your password?\nok = yes;cancel = No");
   
    if (numberString) {

        availPasswordChoice = availPasswordChoice.concat(numbers);

        console.log(availPasswordChoice);
    }
    // confirm whether a user would use special characterstics.
    var specialString = confirm ("would you like special characters in your password?\nok = yes;cancel = No");
   
    if (specialString) {

        availPasswordChoice = availPasswordChoice.concat(specials);

        console.log(availPasswordChoice);
    }

        var userPassword = "";

        for (var i = 0; i < passwordLength1; i++) {

            var rand = Math.floor(Math.random() * availPasswordChoice.length);

            userPassword += availPasswordChoice[rand];

            console.log(userPassword);
                
        } 
    console.log(userPassword);

    passwordText.textContent = userPassword;
          
    
}












