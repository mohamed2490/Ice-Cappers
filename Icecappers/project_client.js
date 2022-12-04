$(document).ready(function () {
  const url = "http://localhost:3000/";

  $("#butn").click(function () {
    let mode = $(this).data("mode");
    if (mode === "easyMode") {
      guessGameStart("easy");
    } else if (mode === "mediumMode") {
      guessGameStart("medium");
    } else {
      guessGameStart("hard");
    }
  });

  $("#butn1").click(restartGame);
  $("#butn2").click(function () {
    window.location.href = "./mainMenu.html";
  });

  function init() {
    let mode = $("#butn").data("mode");
    $.get(url + "?mode=" + mode).done((data) => {
      updateResults({
        output: "",
        score: data.data.score,
        highScore: data.data.highScore,
        noGuesses: data.data.noGuesses,
        guessedNums: data.data.guessedNums,
      });
    });
  }

  function outOfTry() {
    document.getElementById("butn").disabled = true;
    document.getElementById("number1").disabled = true;
    document.getElementById("butn1").style.visibility = "visible";
    document.getElementById("butn2").style.visibility = "visible";
  }

  function resetGameUI() {
    document.getElementById("butn").disabled = false;
    document.getElementById("number1").disabled = false;
    document.getElementById("butn1").style.visibility = "hidden";
    document.getElementById("butn2").style.visibility = "hidden";
  }

  function updateResults(data) {
    document.getElementById("output").innerText = data.output;
    document.getElementById("score").innerText = data.score;
    document.getElementById("highScore").innerText = data.highScore;
    document.getElementById("noGuesses").innerText = data.noGuesses;
    document.getElementById("guessedNums").innerText = data.guessedNums;
  }

  function guessGameStart(mode) {
    let userAnswer = document.getElementById("number1").value;
    $.post(url + mode + "Mode", { answer: userAnswer }).done((data, status) => {
      console.log(data);
      if (data.error) {
        alert(data.error.msg);
      } else {
        updateResults({
          output: data.data.output,
          score: data.data.score,
          highScore: data.data.highScore,
          noGuesses: data.data.noGuesses,
          guessedNums: data.data.guessedNums,
        });
        if (data.data.code === "outoftries") {
          outOfTry();
        }
      }
    });
  }

  init();

  function restartGame() {
    init();
    resetGameUI();
  }

  // function name() {
  //   var name = document.getElementById("Input").value;
  //   document.getElementById("myInput").innerHTML = name;

  //   return name;
  // }

  // function toScoreboard(name, scores) {
  //   var listNames = [];
  //   var listScores = [];
  //   listNames.push(name);
  //   listScores.push(score);
  //   document.getElementById("output").innerHTML =
  //     "Name: " + name + " Score:" + score;
  // }
});
