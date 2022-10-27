// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('you clicked the button!');//to ensure that what you want to happen is happening
  //1. prompt for password criteria
  //    a. password length 8 <128
  //    b. lowercase, uppercase, numeric, special characters
  //2. validate for input
  //3. display generated password
  
  
  
  
  return 'generated password will return here';//<---whatever gets returned based on prompts
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