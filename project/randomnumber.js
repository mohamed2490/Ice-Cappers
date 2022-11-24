
var answer = Math.floor(Math.random() * 10) + 1;
var answer1 = Math.floor(Math.random() * 20) + 1;
var answer2 = Math.floor(Math.random() * 30) + 1;
var numOfguess = 0;
var guessedNum =[];
score = 0;

function guessNumber1And10(){

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
          guessedNum.push(a);
          numOfguess += 1;
        document.getElementById("output").innerHTML ='Guess is too high';
        document.getElementById("message3").innerHTML = "Score : " + score;
        document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
        document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
        if(numOfguess>=3){
          document.getElementById("output").innerHTML ='Out of tries you scored: '+ score + " points.";
          document.getElementById('butn').disabled=true;
          }
       
        
       
        }
         else if(a<answer){
          guessedNum.push(a);
          numOfguess += 1;
          document.getElementById("output").innerHTML ='Guess is too low';
          document.getElementById("message3").innerHTML = "Score : " + score;
        document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
        document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
          if(numOfguess>=3){
          document.getElementById("output").innerHTML ='Out of tries you scored: '+ score + " points.";
          document.getElementById('butn').disabled=true;
          }
        
        
         }
         else{
          guessedNum.push(a);
          numOfguess = 0;
          guessedNum = [];
          score += 1;
          answer = Math.floor(Math.random() * 10) + 1;
            document.getElementById("output").innerHTML ='Guess is correct';
            document.getElementById("message3").innerHTML = "Score : " + score;
            document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
             document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
          

         }
        
         
        
    }
  
  

  
}

function guessNumber1And20(){
//generating a random integer from 1 to 10
score = 0;
  
// take input from the user
var a=document.getElementById("number1").value;
var a = parseInt(a);

 // Keeps taking input until it fufils conditions of being within range of random number.
if(a<1||a>20){
  alert("Please Enter a number Between 1 to 20");
}
else if((Number.isInteger(a))== false){
  alert("The number you entered is not an integer, please enter an integer Between 1 to 20 ");
}
else{
    
      
      
        
       if(a>answer1){
        guessedNum.push(a);
        numOfguess += 1;
      document.getElementById("output").innerHTML ='Guess is too high';
      document.getElementById("message3").innerHTML = "Score : " + score;
      document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
      document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
      if(numOfguess>=5){
        document.getElementById("output").innerHTML ='Out of tries you scored: '+ score + " points.";
        document.getElementById('butn').disabled=true;
        }
     
      
     
      }
       else if(a<answer1){
        guessedNum.push(a);
        numOfguess += 1;
        document.getElementById("output").innerHTML ='Guess is too low';
        document.getElementById("message3").innerHTML = "Score : " + score;
      document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
      document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
        if(numOfguess>=5){
        document.getElementById("output").innerHTML ='Out of tries you scored: '+ score + " points.";
        document.getElementById('butn').disabled=true;
        }
      
      
       }
       else{
        guessedNum.push(a);
        numOfguess = 0;
        guessedNum = [];
        score += 1;
        answer1 = Math.floor(Math.random() * 20) + 1;
          document.getElementById("output").innerHTML ='Guess is correct';
          document.getElementById("message3").innerHTML = "Score : " + score;
          document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
           document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
        

       }
      
       
      
  }




}

function guessNumber1And30(){
  //generating a random integer from 1 to 30
  score = 0;
    
  // take input from the user
  var a=document.getElementById("number1").value;
  var a = parseInt(a);
  
   // Keeps taking input until it fufils conditions of being within range of random number.
  if(a<1||a>30){
    alert("Please Enter a number Between 1 to 30");
  }
  else if((Number.isInteger(a))== false){
    alert("The number you entered is not an integer, please enter an integer Between 1 to 30 ");
  }
  else{
      
        
        
          
         if(a>answer2){
          guessedNum.push(a);
          numOfguess += 1;
        document.getElementById("output").innerHTML ='Guess is too high';
        document.getElementById("message3").innerHTML = "Score : " + score;
        document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
        document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
        if(numOfguess>=7){
          document.getElementById("output").innerHTML ='Out of tries you scored: '+ score + " points.";
          document.getElementById('butn').disabled=true;
          }
       
        
       
        }
         else if(a<answer2){
          guessedNum.push(a);
          numOfguess += 1;
          document.getElementById("output").innerHTML ='Guess is too low';
          document.getElementById("message3").innerHTML = "Score : " + score;
        document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
        document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
          if(numOfguess>=7){
          document.getElementById("output").innerHTML ='Out of tries you scored: '+ score + " points.";
          document.getElementById('butn').disabled=true;
          }
        
        
         }
         else{
          guessedNum.push(a);
          numOfguess = 0;
          guessedNum = [];
          score += 1;
          answer1 = Math.floor(Math.random() * 30) + 1;
            document.getElementById("output").innerHTML ='Guess is correct';
            document.getElementById("message3").innerHTML = "Score : " + score;
            document.getElementById("message1").innerHTML = "No. Of Guesses : " + numOfguess;
             document.getElementById("message2").innerHTML = "Guessed Number Are: " + guessedNum;
          
  
         }
        
         
        
    }
  
  
  
  
  }



function mouseOver() {
    document.getElementById("butn").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("butn").style.color = "black";
  }