var answer = Math.floor(Math.random() * 10) + 1;

function guessNumber(){

  //generating a random integer from 1 to 10

  
  // take input from the user
 var a=document.getElementById("number1").value;
  var a = parseInt(a);

   // Keeps taking input until it fufils conditions of being within range of random number.
  if(a<1||a>10){
    alert("Please Enter a number Between 1 to 10");
  }
  else if((Number.isInteger(a))== false){
    alert("The number you entered is not an integer, please enter an integer Between 1 to 10 ");
  }
  else{
         if(a>answer){
        document.getElementById("output").innerHTML ='Guess is too high';
        }
         else if(a<answer){
        document.getElementById("output").innerHTML ='Guess is too low';
         }
         else{
            document.getElementById("output").innerHTML ='Guess is correct';
            document.getElementById('butn').disabled=true;
         }
    
    }
  
  

  
}




function mouseOver() {
    document.getElementById("butn").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("butn").style.color = "black";
  }