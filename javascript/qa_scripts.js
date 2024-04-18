import { qaQuestions } from '../javascript/data.js';
// import { scenes } from '../javascript/data.js';



let questionContainer = document.getElementById('question-container');
let questionText = document.getElementById('question');
let imageContainer = document.getElementById('image-container');
let animalImage = document.getElementById('animal-image');
let imageCredit = document.getElementById('image-credit');


let endTxt = document.getElementById('end-txt');
let endBtn = document.getElementById('end-btn');

const optionButtons = document.querySelectorAll('.optionButtons');

let currentQuestionIndex = 0;


function SetQuestion(questionIndex) {
    const currentQuestion = qaQuestions[questionIndex];

    questionText.innerHTML = currentQuestion.question;
    animalImage.src = currentQuestion.image;
    imageCredit.innerText = currentQuestion.creditText;

    SetOptions();
};


function NextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < qaQuestions.length) {
        setQuestion(currentQuestionIndex);
    } else {

        console.log('Loppu');
    }
}

function SetOptions() {
    qaQuestions.forEach((question, index) => {
        for (let i = 0; i < question.options.length; i++) {
            optionButtons[index * question.options.length + i].textContent = question.options[i];
        }
    });
};

optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        const currentQuestion = qaQuestions[currentQuestionIndex];
        if (index === currentQuestion.correctAnswerIndex) {

            NextQuestion();
        } 
        else {
            alert('Väärä vastaus, yritä uudestaan.');
        }
    });
});


// DOM
document.addEventListener('DOMContentLoaded', function() {
    SetQuestion(currentQuestionIndex);
});
