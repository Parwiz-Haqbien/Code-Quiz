const username = document.querySelector ('#username')
const saveScoreBtn = document.querySelector ('#saveScoreBtn')
const finalScore = document.querySelector ('#finalScore')
const mostRecentScore = document.querySelector ('#mostRecentScore')


const highScore = JSON.parse(localStorage.getItem('highscores')) ||  []

 const MAX_SCORES=5

 finalScore.innerText = mostRecentScore

 username.addEventListener ('keyup' , () => {
    saveScoreBtn.disabled = !username.value
 })


//this prevent the button to reload or miss up the data.
 saveHighScore =e => {
    e.preventDefault ()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push (score)

    highScores.sort ((a,b) =>  {
        return b.score - a.score
    })

    highScores.splice (5)

    localStorage.setItem('highScores' , JSON.stringify (highScores))
    window.location.assign('/')
 }
