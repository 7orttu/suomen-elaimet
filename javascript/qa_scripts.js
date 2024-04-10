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

    questionText.innerHTML = currentQuestion.text;
    animalImage.src = currentQuestion.image;
};


function nextQuestion() {
    currentQuestionIndex++;

    setQuestion(currentQuestionIndex);
};


function setOptionButtons() {
    
};



