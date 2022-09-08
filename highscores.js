const highScoresList = document.querySelector ('#highScoresList')
const highScores = JSON.parse (localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
//we basically creating a new array
highScores.map ( score => {
    //whatever you in at the end of the quiz what that will fill in 
   return `<li class ='high-score'> ${score.name} - ${score.score} </li>`

}).join(``)
