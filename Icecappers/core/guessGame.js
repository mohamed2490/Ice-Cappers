let numOfguess;
let guessedNum;
let score;
let highScore;
let generatedAnswer = 1;
function generateAnswer(max) {
  return Math.floor(Math.random() * max) + 1;
}

function init(mode) {
  response = {};
  numOfguess = 0;
  guessedNum = [];
  score = 0;
  highScore = 0;

  if (mode === "easyMode") {
    max = 10;
  } else if (mode === "mediumMode") {
    max = 20;
  } else {
    max = 30;
  }

  generatedAnswer = generateAnswer(max);

  response.data = {
    score: score,
    highScore: highScore,
    noGuesses: numOfguess,
    guessedNums: guessedNum,
  };

  return response;
}

const guessNumber = (min, max, noTries, userAnswer) => {
  //generating a random integer from 1 to 10
  userAnswer = parseInt(userAnswer);
  let response = {};
  let gameData = {
    score: score,
    highScore: highScore,
    noGuesses: numOfguess,
    guessedNums: guessedNum,
  };

  // take input from the user
  // Keeps taking input until it fufils conditions of being within range of random number.
  if (userAnswer < min || userAnswer > max) {
    response.error = { msg: `Please Enter a number Between ${min} to ${max}` };
  } else if (Number.isInteger(userAnswer) == false) {
    response.error = {
      msg: `The number you entered is not an integer, please enter an integer Between ${min} to ${max}`,
    };
  } else {
    guessedNum.push(userAnswer);
    if (userAnswer > generatedAnswer) {
      numOfguess++;
      gameData.noGuesses++;
      response.data = {
        output: "Guess is too high",
        code: "guesstoohigh",
        ...gameData,
      };
    } else if (userAnswer < generatedAnswer) {
      numOfguess++;
      gameData.noGuesses++;
      response.data = {
        output: "Guess is too low",
        code: "guesstoolow",
        ...gameData,
      };
    } else {
      numOfguess = 0;
      guessedNum = [];
      if (score >= highScore) {
        gameData.highScore++;
      }
      gameData.score++;
      generatedAnswer = generateAnswer(max);
      response.data = {
        output: "Guess is correct",
        code: "guesscorrect",
        ...gameData,
      };
    }

    if (numOfguess >= noTries) {
      response.data = {
        output: "Out of tries you scored: " + score + " points.",
        code: "outoftries",
        ...gameData,
      };
    }
  }

  return response;
};

init();

function name() {
  var name = document.getElementById("Input").value;
  document.getElementById("myInput").innerHTML = name;

  return name;
}

function toScoreboard(name, scores) {
  // var listNames = [];
  // var listScores = [];
  // listNames.push(name);
  // listScores.push(score);
  // document.getElementById("output").innerHTML =
  //   "Name: " + name + " Score:" + score;
}

module.exports = { guessNumber, init };
