import { qaQuestions } from '../javascript/data.js';


let questionContainer = document.getElementById('question-container');
let questionText = document.getElementById('question');
let imageContainer = document.getElementById('image-container');
let animalImage = document.getElementById('animal-image');
let imageCredit = document.getElementById('image-credit');
let instruction = document.getElementById('instruction');

let optionBtnF = document.getElementById('option1');
let optionBtnS = document.getElementById('option2');
let optionBtnT = document.getElementById('option3');
let optionBtnFO = document.getElementById('option4');

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


function SetOptions() {
    qaQuestions.forEach((question, index) => {
        for (let i = 0; i < question.options.length; i++) {
            optionButtons[index * question.options.length + i].textContent = question.options[i];
        }
    });
};


function NextQuestion() {
    currentQuestionIndex++;

    optionButtons.forEach(function(optionButton) {
        optionButton.style.color = 'white';
    });

    if (currentQuestionIndex < qaQuestions.length) {
        SetQuestion(currentQuestionIndex);
    } 
    else {
        questionContainer.style.opacity=0;

        instruction.innerText = "Olet valmis! Paina LOPETA lopettaaksesi!";
    }
}


optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        const currentQuestion = qaQuestions[currentQuestionIndex];

        if (index === currentQuestion.correctAnswerIndex) {
            button.style.color = 'green';

            setTimeout(NextQuestion, 2500);
        } 
        else {
            optionButtons.forEach(function(optionButton) {
                optionButton.style.color = 'red';

            });
            setTimeout(NextQuestion, 2500);
        }
    });
});
