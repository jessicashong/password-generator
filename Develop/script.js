// Assignment code here
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*()~<>?'
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('clicked the button');//to ensure that what you want to happen is happening
  //1. prompt for password criteria
  var userChoice = prompt('How many characters do you want your password to be?');
  //    a. password length 8 <128
  var passwordLength = parseInt(userChoice);
  if (isNaN(passwordLength)){
    alert('Must be a number.');
    return;
  } 
  if (passwordLength < 8 || passwordLength > 128){
    alert('Must be between 8 - 128 characters long');
    return;
  }
//    b. lowercase, uppercase, numeric, special characters
  var lowercaseAlert = confirm('Do you want lowercase letters in your password?');
  var uppercaseAlert = confirm('Do you want uppercase letters in your password?');
  var numberAlert = confirm('Do you want numbers in your password?');
  var specialCharAlert = confirm('Do you want special characters in your password?');

  var selectedOptions = []
//2. validate for input
  if (lowercaseAlert === true){
    selectedOptions.push(lowercase);
  }
  if (uppercaseAlert === true){
    selectedOptions.push(uppercase);
  }
  if (numberAlert === true){
    selectedOptions.push(numbers);
  }
  if (specialCharAlert === true){
    selectedOptions.push(specialCharacters);
  }
  console.log(selectedOptions);
  
  //    set each input/confirm to variable. use conditional--if true... if false....
  //3. display generated password
  var generatedPassword = " ";
  //look up math methods and functions to generate random stuff
  return 'generated password';//<---whatever gets returned based on prompts
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //make generate password function; values should be entered
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password--
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page