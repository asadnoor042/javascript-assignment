// question #01
let userInput = prompt("enter a character")
if (userInput.charCodeAt () >= 65 && userInput.charCodeAt () <= 90 ) {
    alert("uppercase")
} else if (userInput.charCodeAt () >=97 && userInput.charCodeAt () <=122){
    alert("lowercase")
}

// question #02

var num1=+prompt('Enter the 1st Integer');
var num2=+prompt('Enter the 2nd Integer');

if( num1===num2){
    alert("Both Integers are equal")
} else if(num1>num2){
    alert("1st Integer is greator than 2nd")
}
    else if( num2>num1){
        alert("2nd Integer is greator than 1st")
    }
else{
    alert(" correct Integer")
}


// question #03

let inputNumber = +prompt("enter a number")
if (inputNumber < 0 ){
    alert("number is negative")
} else if (inputNumber > 0 ){
    alert("number is posituve")
} else if (inputNumber === 0 ){
    alert("number is zero")
}

// question #04

var letter=prompt("Enter any Alphabet")

if( letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')

{
    alert('Input letter  is vowel')
} else if(letter === ""){
    alert("pleaese input a character")
}else{
    alert("Your input is a consonant")
}

//question #05

let password = "asad@123"
let enterPassword = prompt("enter your password")
if (enterPassword === ""){
    alert("please enter your password")
} else  if ( enterPassword === password ){
    alert("Correct! The password you entered matches the original passwor")
 } else {alert("incorrect passsword")
}

//question #06
var time = prompt("entetr the current time")
if (time <= 18) {
    alert(" goood day")
}else {
      alert ("good evening")
}

//question #07

let timeInput = +prompt('enter time' )
if (timeInput  >= 0 && timeInput < 12){
    alert("good morning")
}else if (timeInput >=12 &&  timeInput < 17){
    alert("good afternoon")
}else if (timeInput >=17 &&  timeInput < 21){
    alert("good evening")
}else if (timeInput >=21 &&  timeInput <= 24){
    alert("good night")
}