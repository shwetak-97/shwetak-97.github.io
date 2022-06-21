console.log("JavaScript")
var a=10;
console.log(a)
console.log(typeof(a))
a="Javascript"
console.log(a)
console.log(typeof(a))
var b;
console.log(b)
console.log(typeof(b))
var a;
console.log(a)
a=true;
console.log(a)
console.log(typeof(a))  

function disp(){
    console.log("calling display function")
    var displayMessage = document.getElementById("display");
    console.log(displayMessage);
    displayMessage.innerHTML ="calling display function";
}
function sum(){
     console.log("calling sum")
     var num1 =document.getElementById("num1")
     console.log(num1)
     var num2 = document.getElementById("num2")
     console.log(num2)
     console.log(num1.value)
     console.log(num2.value)

     var result = document.getElementById("result")
     result.innerHTML = num1.value+num2.value
}