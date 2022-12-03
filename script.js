// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");

// Write password to the #password input
function writePassword() {
  password = "";
  createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Added a new function so the user don't have to refresh the page everytime

function clearText(){
  var passwordText = document.querySelector("#password");
  passwordText.value = "Press 'Generate Password' button below";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", clearText);

/*--------------------------------Function - Create Password----------------------------------------------------------------------------------*/

function createPassword()
{
while (check != true)
{
var userInput = prompt("Enter required password length between 8 to 128 characters,")
var check = checkValidInput(userInput);
if (check === false)
  {
    alert ("Input is not a valid number or password length requirement not met, please try again.");
  }
}

userInput = parseInt(userInput);


alert("Pasword length is " + userInput);

var exit = false;

while (exit === false) //Check to ensure that atleast one character type is selected
{
var useUpperChar = confirm('Do you want to use upper case alphabets?');
var useLowerChar = confirm('Do you want to use lower case alphabets?');
var useSpecialChar = confirm('Do you want to use special characters?');
var useNumbers = confirm("Do you want to use numbers?");

if (useUpperChar === false && useLowerChar === false && useSpecialChar === false && useNumbers === false)
  {alert ("Atleat one character type must be selected");
    exit = false;
  }
else {exit = true;}
}



/* Conditional checks to call the right password generator function based on user preferences*/

if (useUpperChar === true && useLowerChar === true && useSpecialChar === true && useNumbers === true)
  {ulsnC(userInput);}
  else if (useUpperChar === true && useLowerChar === true && useSpecialChar === true && useNumbers === false)
  {ulsC(userInput);}
  else if (useUpperChar === true && useLowerChar === true && useSpecialChar === false && useNumbers === false)
  {ulC(userInput);}
  else if (useUpperChar === true && useLowerChar === false && useSpecialChar === false && useNumbers === false)
  {uC1(userInput);}
  else if (useUpperChar === false && useLowerChar === true && useSpecialChar === true && useNumbers === true)
  {lsnC(userInput);}
  else if (useUpperChar === false && useLowerChar === true && useSpecialChar === true && useNumbers === false)
  {lsC(userInput);}
  else if (useUpperChar === false && useLowerChar === true && useSpecialChar === false && useNumbers === false)
  {lC(userInput);}
  else if (useUpperChar === false && useLowerChar === false && useSpecialChar === true && useNumbers === true)
  {snC(userInput);}
  else if (useUpperChar === false && useLowerChar === false && useSpecialChar === true && useNumbers === false)
  {sC(userInput);}
  

}

/* -------------------------------Function to check if user input is valid or not ------------------------------------------------------------*/

function checkValidInput(a)
{

var numb = /[0-9]/.test(a);
var lowercaseChar = /[a-z]/.test(a);
var upperCase = /[A-Z]/.test(a)
var specialChar = /[!,@,#,$,%,^,&,*,(,),_,+,-,=,<,>,?,/,.,:,',"]/.test(a);

if (numb && !lowercaseChar && !upperCase && !specialChar) 
{
  a = parseInt(a);
  if (a >= 8 && a < 128)
    {
      return true;
    }
    else {
          return false;
        }
  
} 

else {

  return false;
}
}

/*--------------------------------Password Generator for UpperCase,LowerCase,SpecialChar,Numbers----------------------------------------------*/
function ulsnC(userInput)
{
for (var i=0; i<userInput; i++)
{
  var genRandomNum = Math.floor(Math.random()*10%4);

  if (genRandomNum === 0)
  {password += uC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 1)
  {password += lC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 2)
  {password += sC[Math.floor(Math.random()*100)%29];}
  else if (genRandomNum === 3)
  {password += nC[Math.floor(Math.random()*100)%10];}
}
}

/*--------------------------------Password Generator for UpperCase,LowerCase,SpecialChar----------------------------------------------------*/
function ulsC(userInput)
{
for (var i=0; i<userInput; i++)
{
  var genRandomNum = Math.floor(Math.random()*10%3);

  if (genRandomNum === 0)
  {password += uC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 1)
  {password += lC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 2)
  {password += sC[Math.floor(Math.random()*100)%29];}
}
}

/*--------------------------------Password Generator for UpperCase,LowerCase---------------------------------------------------------------*/
function ulC(userInput)
{
for (var i=0; i<userInput; i++)
{
  var genRandomNum = Math.floor(Math.random()*10%2);

  if (genRandomNum === 0)
  {password += uC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 1)
  {password += lC[Math.floor(Math.random()*100)%26];}
}
}

/*--------------------------------Password Generator for UpperCase------------------------------------------------------------------------*/
function uC1(userInput)
{
for (var i=0; i<userInput; i++)
{
  password += uC[Math.floor(Math.random()*100)%26];
}
}

/*--------------------------------Password Generator for LowerCase,SpecialChar,Numbers---------------------------------------------------*/
function lsnC(userInput)
{
for (var i=0; i<userInput; i++)
{
  var genRandomNum = Math.floor(Math.random()*10%3);

  if (genRandomNum === 0)
  {password += lC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 1)
  {password += sC[Math.floor(Math.random()*100)%29];}
  else if (genRandomNum === 2)
  {password += nC[Math.floor(Math.random()*100)%10];}
}
}

/*--------------------------------Password Generator for LowerCase,SpecialChar -----------------------------------------------------------*/
function lsC(userInput)
{
for (var i=0; i<userInput; i++)
{
  var genRandomNum = Math.floor(Math.random()*10%2);

  if (genRandomNum === 0)
  {password += lC[Math.floor(Math.random()*100)%26];}
  else if (genRandomNum === 1)
  {password += sC[Math.floor(Math.random()*100)%29];}
}
}

/*--------------------------------Password Generator for LowerCase-----------------------------------------------------------------------*/
function lC(userInput)
{
for (var i=0; i<userInput; i++)
{
  password += lC[Math.floor(Math.random()*100)%26];
}
}

/*--------------------------------Password Generator for SpecialChar,Numbers--------------------------------------------------------------*/
function snC(userInput)
{
for (var i=0; i<userInput; i++)
{
  var genRandomNum = Math.floor(Math.random()*10%2);

  if (genRandomNum === 0)
  {password += sC[Math.floor(Math.random()*100)%29];}
  else if (genRandomNum === 1)
  {password += nC[Math.floor(Math.random()*100)%10];}
}
}

/*--------------------------------Password Generator for SpecialChar--------------------------------------------------------------------*/
function sC(userInput)
{
for (var i=0; i<userInput; i++)
{
  password += sC[Math.floor(Math.random()*100)%29];
}
}

/*--------------------------------Password Generator for Numbers-----------------------------------------------------------------------*/
function nC(userInput)
{
for (var i=0; i<userInput; i++)
{
  password += nC[Math.floor(Math.random()*100)%10];
}
}
/*--------------------------------Global Variables declaration ------------------------------------------------------------------------*/
var password = "";  
var uC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var sC = ["`","~","!","@", "#","$","%","^","&","*","(",")","-","=","+","_","[","]","{","}",":",";","'",",",".","<",">","?","/"];
var nC = ["0","1","2","3","4","5","6","7","8","9"];
