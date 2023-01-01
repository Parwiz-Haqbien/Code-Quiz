const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const ProgressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Who is the Goat of Football',
        choice1: 'Messi',
        choice2: 'Ronaldo',
        choice3: 'Pele',
        choice4: 'Maradona',
        answer: 1,
    },
    {
        question: 'How many goals has Messi scored in his Football career',
        choice1: '700',
        choice2: '750',
        choice3: '773',
        choice4: '777',
        answer: 3,
    },
    {
        question: 'How many Ballon golden boots does Messi Have',
        choice1: '7',
        choice2: '5',
        choice3: '0',
        choice4: '3',
        answer: 2,
    },
    {
        question: 'Why did Neymar left Barcelona',
        choice1: 'Money',
        choice2: 'legacy',
        choice3: 'To win perosnal trophies',
        choice4: 'felt like it',
        answer: 2,
    }
]

//This sets the points the game will have and the number of questions that will be displayed 
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

// Telling the code to start the game with 0 question and the score should be 0 as well
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if( availableQuestions.length ===0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

//Question 1 of 4, 2 of 4 etc
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // Calculate what question we on and correspond that with the percentage we are currently at
    ProgressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
//this is how we are going to calculate the value of the question
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    //this will keep track of what question we are on 
    currentQuestion =availableQuestions[questionsIndex]
    console.log(currentQuestion)
    //this will know what question will be asked
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        //this will know what choice we are clicking on 
        const number= choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice (questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach( choice => {
choice.addEventListener ('click', e => {
        if (!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset ['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        //This basicaly says if you get a question correct your score will increase by 100
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        //we basicaly add the questions if we get it right
        selectedChoice.parentElement.classList.add(classToApply)
        console.log(selectedChoice)
        //this basically says if we click on a question that will be right or worng we will be able to see if we got it right or wrong
        setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply)
        //This will give us the next question 
        getNewQuestion()

        },1000)
})
})

var incrementScore = num => {
    score +=num
    scoreText.innerText = score;
    console.log(score)
}

startGame()
