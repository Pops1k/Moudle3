// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Needs arrays for possible Characters
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Array of uppercase letters
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//Array of numers
var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

//Array of special characters 
var specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~"
];

//Need Function to take user input and store in object
function promptuser(){
var passwordLenght = prompt("How Long do you want the password to be")
var confirmlowercase = confirm("Do you want Lowercase in your password?")
var confirmuppercase = confirm("Do you want Uppercase in your password?")
var confrimnumbers = confirm("Do you want numbers in your password?")
var confrimspecialCharacters = confirm("Do you want special characters in your password")


var Userresponse = {
  length: passwordLenght,
  lowerCase: confirmlowercase,
  uppsercase: confirmuppercase,
  numbers: confrimnumbers,
  specialCharacters: confrimspecialCharacters,
}
console.log(Userresponse)
return Userresponse
}
//Function to randomize arrays
function ShuffleArrays(Array){
  var randomindex = Math.floor(Math.random ()*Array.length)
  var trueValue = Array[randomindex]
  return trueValue
}
//Fuction to put it all together and produce random password
function generatepassword(){
  var characterpull = []
  var newpassword = []
  var Userresponse = promptuser ()




  if(Userresponse.lowerCase===true){
    characterpull = characterpull.concat(lowerCaseLetters)
    characterpull.push(ShuffleArrays(lowerCaseLetters))
  }
  if(Userresponse.numbers===true){
    characterpull = characterpull.concat(numbers)
    characterpull.push(ShuffleArrays(numbers))
  }
  if(Userresponse.specialCharacters===true){
    characterpull = characterpull.concat(specialCharacters)
    characterpull.push(ShuffleArrays(specialCharacters))
  }
  if(Userresponse.uppsercase===true){
    characterpull = characterpull.concat(upperCaseLetters)
    characterpull.push(ShuffleArrays(upperCaseLetters))
  }
  for(var I = 0;I <Userresponse.length;I++){
    var almostpassword= ShuffleArrays(characterpull)
    newpassword.push(almostpassword)
  }
  console.log(newpassword)
  return newpassword.join("")
}