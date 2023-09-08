const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordBoxResult = document.getElementById("passwordBox")
let passwordBoxResult2 = document.getElementById("passwordBox2")


function test(){
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
     return randomPassword
    
}

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
     return characters[randomChar]
 
}

const generatedPasswordOne = generateRandomPassword() 
const generatedPasswordOne2 = generateRandomPassword() 

passwordBoxResult.textContent =  generatedPasswordOne
passwordBoxResult2.textContent = generatedPasswordOne2

}
// copy buton one
function copyPassword() {
 
    let copiedPassword = passwordBoxResult.textContent 
      
    alert(`password is ${copiedPassword} copied to clipboard!`);
    };


// copybutton two
    function copyPassword2() {
 
        let copiedPassword2 = passwordBoxResult2.textContent 
          
        alert(`password is ${copiedPassword2} copied to clipboard!`);
        };

       
//         var slider = document.getElementById("myRange");
//         var output = document.getElementById("demo");
//         output.innerHTML = slider.value;
        

     
//         slider.oninput = function() {
//           output.innerHTML = slider.value;
//         //   return output.innerHTML
//           console.log(output.innerHTML)
//         }
    
 
// let passwordLength = output.innerHTML
// console.log(passwordLength)
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var passwordLength; // Declare the variable outside the event handler

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = slider.value;
  
  // Update the passwordLength variable inside the oninput function
  passwordLength = slider.value;
  console.log(passwordLength);
}


