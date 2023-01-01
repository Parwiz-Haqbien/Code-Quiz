var questNumber = 0;
var finalScore = 0;
var timeLeft = 75;
var countDown;

const timeCountDown = document.querySelector(".timer");
const content = document.querySelector(".container");
const questionStart = document.querySelector(".question");
const answersEl = document.querySelector(".info");
const startPage = document.getElementById("qintroPart");
const endPart = document.getElementById("qendPart");
const score = document.getElementById("score");
var result = document.querySelector(".result");
var playerName = document.getElementById("initials");
var nameList = document.getElementById("names");


const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", nextPage);

const clearButton = document.getElementById("clearScore");
clearButton.addEventListener("click", clearScore);

const backButton = document.getElementById("goBack");
backButton.addEventListener("click", goBack);

const viewScores = document.getElementById("viewHighScores");
viewScores.addEventListener("click", displayHighScores);

var rightAnswer = document.querySelectorAll(".right");
for (const button of rightAnswer) {
  button.addEventListener("click", correctAnswer);
}

var notRightAnswer = document.querySelectorAll(".wrong");
for (const button of notRightAnswer) {
  button.addEventListener("click", wrongAnswer);
}

const start = document.querySelector(".startQuiz");
start.addEventListener("click", startQuiz);

function startQuiz() {
    resetTest();
    countDown = startCountdown();
    startTest();
  }

  function startCountdown() {
    return setInterval(function () {
      timeLeft--;
      timeCountDown.textContent = "Time: " + timeLeft;
  
      if (timeLeft < 0 || questNumber == 5) {
        clearInterval(countDown);
        score.textContent = "Your final score is " + timeLeft;
      }
    }, 1000);
  }

  function startTest() {
    startPage.style.display = "none";
    document.getElementById("q" + questNumber).style.display = "block";
    nextPage();
  }

  function resetTest() {
    clearInterval(countDown);
    questNumber = 0;
    finalScore = 0;
    timeLeft = 75;
    timeCountDown.textContent = "Time: " + timeLeft;
    playerName.value = "";
  }

  function correctAnswer() {
    result.textContent = "Correct!!";
    result.style.display = "block";
    nextPage();
  }

  function goBack() {
    resetTest();
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("qendPart").style.display = "block";
  }