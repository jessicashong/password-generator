// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('you clicked the button!');//to ensure that what you want to happen is happening
  
  
  
  
  
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
