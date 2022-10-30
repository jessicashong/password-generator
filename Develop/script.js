// Assignment code here
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*()~<>?';
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('clicked the button');//to ensure that what you want to happen is happening
  //1. prompt for password criteria
  var userChoice = prompt('How many characters do you want your password to be?');
  var passwordLength = userChoice
  //    a. password length 8 <128
  //var passwordLength = parseInt(userChoice);
  if (isNaN(passwordLength)){
    alert('Must be a number.');
    return;
  } 
  if (passwordLength < 8 || passwordLength > 128){
    alert('Must be between 8 - 128 characters long');
    return;
  }
  console.log(passwordLength);
//    b. lowercase, uppercase, numeric, special characters
  var lowercaseAlert = confirm('Do you want lowercase letters in your password?');
  console.log(lowercaseAlert);
  var uppercaseAlert = confirm('Do you want uppercase letters in your password?');
  console.log(uppercaseAlert);
  var numberAlert = confirm('Do you want numbers in your password?');
  console.log(numberAlert);
  var specialCharAlert = confirm('Do you want special characters in your password?');
  console.log(specialCharAlert);

  var selectedOptions = '';
//2. validate for input
//    set each input/confirm to variable. use conditional--if true... 
  if (lowercaseAlert === true){
    selectedOptions += lowercase;
  }
  if (uppercaseAlert === true){
    selectedOptions += uppercase;
  }
  if (numberAlert === true){
    selectedOptions += numbers;
  }
  if (specialCharAlert === true){
    selectedOptions += specialCharacters;
  }
  console.log(selectedOptions);
  
  //3. display generated password
  var generatedPassword = '';

  //look up math methods and functions to generate random stuff
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedOptions.length);
    var randomChar = selectedOptions[randomIndex];
    generatedPassword += randomChar;
  }
  console.log(generatedPassword);
  return generatedPassword;//<---whatever gets returned based on prompts
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //make generate password function; values should be entered
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

