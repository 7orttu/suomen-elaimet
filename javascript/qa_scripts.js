import { qaQuestions } from '../javascript/data.js';
// import { scenes } from '../javascript/data.js';



let questionContainer = document.getElementById('question-container');
let questionText = document.getElementById('question');
let imageContainer = document.getElementById('image-container');
let animalImage = document.getElementById('animal-image');
let imageCredit = document.getElementById('image-credit');



let currentQuestionIndex = 0;


function setQuestion(questionIndex) {
    const currentQuestion = qaQuestions[questionIndex];

    questionText.innerHTML = currentQuestion.question;
    animalImage.src = currentQuestion.image;

    setOptions();
};


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < qaQuestions.length) {
        setQuestion(currentQuestionIndex);
    } else {

        console.log('loppu');
    }
}

const optionButtons = document.querySelectorAll('.optionButtons');
function setOptions() {
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

            nextQuestion();
        } else {

            alert('Väärä vastaus, yritä uudestaan.');
            console.log("Väärä vastaus")
        }
    });
});


// DOM
document.addEventListener('DOMContentLoaded', function() {
    setQuestion(currentQuestionIndex);
});

