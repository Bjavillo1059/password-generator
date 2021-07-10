var symbols = "!@#$%^&*()_-+=";
var numbers = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	
	passwordText.value = password;	
}

function generatePassword() {
	var length = window.prompt("choose a length of numbers for your password");
	console.log(typeof length); // validate it as a string not to convert to a number
	if (length < 8  || length > 128) {
		window.alert("you must chose again")
		return;
	}
	
	// varibales to select symbols, numbers, letters	
	var symbol = window.confirm("would you like to use symbols?");
	var number = window.confirm("would you like to use a number?");
	var letter = window.confirm("would you like to use letters");
	var passString = ""

	// allows for the selection of letters, symbols, and numbers for the specified length given with window prompt
	let charInput = length
	letter ? (charInput += letters) : "";
	symbol ? (charInput += symbols) : "";
	number ? (charInput += numbers) : "";

	// sets random characters generated with the selections of the prompts given
	for (let i = 0; i < length; i++) {
		var index = Math.floor(Math.random() * charInput.length);
  		var random = charInput[index]; // index generated from previous line
		passString += random
	}
	
	// runs the pass generator
	return passString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
	alert("Remember to copy your password when generated");

