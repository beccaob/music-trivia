// elements from html 

const restartBtn = document.getElementById('restart');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
const questionText = document.getElementById('question-text');
const userScore = document.getElementById('user-score');

// counter for current question 

let currentQuestion = 0;

// score counter 

var currentScore = 0;

// quiz questions 

let questions = [
    {
        question: "The Beatles' 'Yellow Submarine' was released as a single.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "The Beatles' 'Yellow Submarine' was released as a single.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "The Beatles' 'Yellow Submarine' was released as a single.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
];

// onclick event listeners 

restartBtn.addEventListener('click',restart);
submitBtn.addEventListener('click',submit);
prevBtn.addEventListener('click',previous);
nextBtn.addEventListener('click',next)

// begin quiz function 

function beginQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let answerOption=0;
        if (questions = [currentQuestion].answers[answerOption].answer){
            if (score<3){
                score++;
            };
        };
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        };
    };
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let answerOption=1;
        if(questions[currentQuestion].answers[answerOption].answer){
            if(score<3) {
                score++;
            };
        };
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        };
    };
    prevBtn.classList.add('hide');
};

beginQuiz(); 


