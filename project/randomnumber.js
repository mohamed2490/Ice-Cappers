
var answer = Math.floor(Math.random() * 10) + 1;
var numOfguess = 0;
var guessedNum =[];

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
      do {
        
      
          
         if(a>answer){
          guessedNum.push(a);
          numOfguess += 1;
        document.getElementById("output").innerHTML ='Guess is too high';
        document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
        document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
        }
         else if(a<answer){
          guessedNum.push(a);
          numOfguess += 1;
        document.getElementById("output").innerHTML ='Guess is too low';
        document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
        document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
         }
         else{
          guessedNum.push(a);
          numOfguess += 1;
            document.getElementById("output").innerHTML ='Guess is correct';
            document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
             document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
            document.getElementById('butn').disabled=true;
         }
        
        } while (numOfguess<3); 
    }
  
  

  
}




function mouseOver() {
    document.getElementById("butn").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("butn").style.color = "black";
  }