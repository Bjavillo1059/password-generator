var symbols = ["!", "@", "#", "$", "%"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
	var length = window.prompt("choose a number length of your password");
		console.log(typeof length); // validate it as a string not to convert to a number
		if (length < 8  || length > 128) {
			window.alert("you must chose again")
			return;
		}
	var symbol = window.confirm("would you like to use symbols");
	// var number = window.confrim (add more info later)
	var passString = ""

	for (let i = 0; i < length; i++) {
		var index = Math.floor(Math.random() * symbols.length);
  		var random = symbols[index]; // index generated from previous line
		passString += random
	}
	return passString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

