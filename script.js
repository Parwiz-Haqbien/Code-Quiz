const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#Score');
const ProgressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let accesptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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


const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;


startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...question];
    getNewQuestions()
}