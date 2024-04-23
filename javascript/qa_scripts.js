import { qaQuestions } from '../javascript/data.js';



let questionContainer = document.getElementById('question-container');
let questionText = document.getElementById('question');
let imageContainer = document.getElementById('image-container');
let animalImage = document.getElementById('animal-image');
let imageCredit = document.getElementById('image-credit');
let instruction = document.getElementById('instruction');

let optionBTN1 = document.getElementById('option1');
let optionBTN2 = document.getElementById('option2');
let optionBTN3 = document.getElementById('option3');
let optionBTN4 = document.getElementById('option4');

let endTxt = document.getElementById('end-txt');
let endBtn = document.getElementById('end-btn');

const optionButtons = document.querySelectorAll('.optionButtons');

let currentQuestionIndex = 0;


function SetQuestion(questionIndex) {
    const currentQuestion = qaQuestions[questionIndex];

    SetEndVisibility("hide");

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

    if (currentQuestionIndex < qaQuestions.length) {
        SetQuestion(currentQuestionIndex);
    } 
    else {
        questionContainer.style.opacity=0;

        optionBTN1.style.visibility='hidden';
        optionBTN2.style.visibility='hidden';
        optionBTN3.style.visibility='hidden';
        optionBTN4.style.visibility='hidden';

        instruction.innerText = "Olet valmis! Paina LOPETA lopettaaksesi!";

        SetEndVisibility("show");
    }
}


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


function RedirectToIndex() {
    window.location.href = '../index.html';
}

function SetEndVisibility(choice) {
    if (choice == "hide") {
        endBtn.style.visibility='hidden';
        endTxt.style.visibility='hidden';
    }
    else if (choice == "show") {
        endBtn.style.visibility='visible';
        endTxt.style.visibility='visible';
    }
}


document.getElementById('end-btn').addEventListener('click', function() {
    RedirectToIndex();
});

// DOM
document.addEventListener('DOMContentLoaded', function() {
    SetQuestion(currentQuestionIndex);
});
