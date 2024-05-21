import { scenes } from '../javascript/data.js';
import { qaQuestions } from '../javascript/data.js';

// TOP-LEVEL ELEMENT VARIABLES ->
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let restartBtn = document.getElementById('restart-btn');
let continueBtn = document.getElementById('continue-btn');
let xBtn = document.getElementById('x');

let scene = document.getElementById('scene');
let animalImage = document.getElementById('animal-image');
let animalText = document.getElementById('animal-text');
let instructionText = document.getElementById('instruction')
let imageCredit = document.getElementById('image-credit');

let textContainer = document.getElementById('text-container');
let imageContainer = document.getElementById('image-container');
let controlContainer = document.getElementById('control-container');
let languageContainer = document.getElementById('language-container');
let fPartEnd = document.getElementById('fpartend-container');


let optionBtnF = document.getElementById('option1');
let optionBtnS = document.getElementById('option2');
let optionBtnT = document.getElementById('option3');
let optionBtnFO = document.getElementById('option4');

let optionContainer = document.getElementById('option-container');

const optionButtons = document.querySelectorAll('.optionButtons');

let endBtn = document.getElementById('end-btn');
// <-


let currentSceneIndex = 0;
let part;   // Just for determining if the user is in facts or questions part of the game.

function DisplayScene(sceneIndex) {
    const currentScene = scenes[sceneIndex];

    // Set elements properties to correspond to data.js
    animalImage.src = currentScene.image;
    scene.style.backgroundImage = "url('" + currentScene.bgImage + "')";
    animalText.innerText = currentScene.text;
    prevBtn.innerText = currentScene.buttonText[0];
    nextBtn.innerText = currentScene.buttonText[1];
    imageCredit.innerText = currentScene.creditText;

    part = "facts";

    // SETTING GLOBAL MODIFICATIONS FOR ELEMENTS
    ElementEnabler(prevBtn, false, "visible");
    ElementEnabler(nextBtn, false, "visible");

    animalText.style.color = 'black';
    animalText.style.textShadow = '0 0 0';
    textContainer.style.opacity = '70%';

    imageContainer.style.textAlign = 'center';
    ElementLocationModifier(animalImage, "0px");
    ElementSizeModifier(animalImage, "700px", "650px");

    // DISABLING ELEMENTS
    ElementEnabler(fPartEnd, true, "hidden");
    ElementEnabler(optionContainer, true, "hidden");
    ElementEnabler(endBtn, true, "hidden");

    ElementEnabler(optionBtnF, true, "hidden");
    ElementEnabler(optionBtnS, true, "hidden");
    ElementEnabler(optionBtnT, true, "hidden");
    ElementEnabler(optionBtnFO, true, "hidden");


    // IF statements for each fact screen ->
    // MAIN SCREEN
    if (currentScene.name === "main") {

        ElementEnabler(prevBtn, true, "hidden");
        ElementEnabler(nextBtn, false, "visible");

        ElementLocationModifier(nextBtn, "", "-10px", "", "13%");
        ElementLocationModifier(prevBtn, "", "-80px", "", "-22%");

        ElementLocationModifier(textContainer, "80px");
        ElementSizeModifier(textContainer, "600px");
        textContainer.style.backgroundColor = 'transparent';
        textContainer.style.opacity = '100%';
        animalText.style.fontSize = '70px';
        animalText.style.color = '#1b4bab';
        animalText.style.textShadow = '-1px 0px 0 #000, -2px 0px 0 #000, -3px 0px 0 #000, -4px 0px 0 #000, -5px 0px 0 #000, -5px 1px 0 #000, -5px 2px 0 #000, -5px 3px 0 #000';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")

        instructionText.innerText = "Paina ALOITA nappia";
    } 
    // INSTRUCTION SCREEN
    else if (currentScene.name === "ohjeet") {

        ElementEnabler(prevBtn, false, "visible");
        ElementEnabler(nextBtn, false, "visible");

        ElementLocationModifier(textContainer, "75px", "", "-20px");
        ElementSizeModifier(textContainer, "250px");
        textContainer.style.backgroundColor = 'white';
        textContainer.style.opacity = '100%';
        animalText.style.fontSize = '25px';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")

        instructionText.innerText = "Tämä on ohje nappula! Paina JATKA niin voit jatkaa faktoihin!";
    }
    // PREVIEW SCREENS
    else if (currentScene.name === "Susi-pre" || currentScene.name === "Kettu-pre" || currentScene.name === "Karhu-pre" || currentScene.name === "Metsäkauris-pre" || currentScene.name === "Hirvi-pre" || currentScene.name === "Majava-pre") {

        textContainer.style.backgroundColor = 'transparent';
        textContainer.style.opacity = '0%';
        animalText.style.fontSize = '35px';

        instructionText.innerText = "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja!";
    } 
    // FACT SCREENS
    else if (currentScene.name === "Susi" || currentScene.name === "Kettu" || currentScene.name === "Karhu" || currentScene.name === "Metsäkauris" || currentScene.name === "Hirvi" || currentScene.name === "Majava") {

        ElementLocationModifier(textContainer, "220px", "", "0px");
        ElementSizeModifier(textContainer, "600px");
        textContainer.style.backgroundColor = 'white';
        animalText.style.fontSize = '22px';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "380px", "260px")

        instructionText.innerText = "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja!";

        ElementEnabler(optionBtnF, true, "hidden");
        ElementEnabler(optionBtnS, true, "hidden");
        ElementEnabler(optionBtnT, true, "hidden");
        ElementEnabler(optionBtnFO, true, "hidden");
    }
    // CONTINUE/FPARTEND(first part end) SCREEN
    else if (currentScene.name === "end") {
        ElementEnabler(fPartEnd, false, "visible");

        ElementEnabler(prevBtn, false, "visible");
        ElementEnabler(nextBtn, true, "hidden");

        ElementLocationModifier(textContainer, "85px", "", "-20px");
        ElementSizeModifier(textContainer, "250px");
        textContainer.style.backgroundColor = "white";

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")


        restartBtn.innerText = "ALOITA ALUSTA";
        continueBtn.innerText = "JATKA";

        instructionText.innerText = "Valitse mitä haluat seuraavaksi tehdä alhaalla olevilla painikkeilla.";
    } 
    // <-
}


let currentQuestionIndex = 0;
let totalRightAnswers = 0;

function DisplayQuestion(questionIndex) {
    const currentQuestion = qaQuestions[questionIndex];

    animalImage.src = currentQuestion.image;
    animalText.innerText = currentQuestion.question;
    prevBtn.innerText = currentQuestion.buttonText[0];
    nextBtn.innerText = currentQuestion.buttonText[1];
    imageCredit.innerText = currentQuestion.creditText;

    part = "qa";

    optionBtnF.style.backgroundImage = "linear-gradient(to right, black, #1b4bab)";
    optionBtnS.style.backgroundImage = "linear-gradient(to right, black, #1b4bab)";
    optionBtnT.style.backgroundImage = "linear-gradient(to right, black, #1b4bab)";
    optionBtnFO.style.backgroundImage =  "linear-gradient(to right, black, #1b4bab)";

    ElementEnabler(optionBtnF, false, "visible");
    ElementEnabler(optionBtnS, false, "visible");
    ElementEnabler(optionBtnT, false, "visible");
    ElementEnabler(optionBtnFO, false, "visible");

    ElementEnabler(endBtn, true, "hidden");

    ElementEnabler(prevBtn, false, "visible");

    ElementEnabler(fPartEnd, true, "hidden");

    ElementLocationModifier(textContainer, "100px");

    // Set option buttons color back to white
    optionButtons.forEach(function(optionButton) {
        optionButton.style.color = 'white';
    });



    if(currentQuestion.name === "wolfQuestion") {
        animalText.style.color = 'black';

        ElementLocationModifier(textContainer, "220px");
        ElementSizeModifier(textContainer, "600px");
    }
    if(currentQuestion.name === "wolfQuestion" || currentQuestion.name === "foxQuestion" || currentQuestion.name === "bearQuestion" || currentQuestion.name === "roedeerQuestion" || currentQuestion.name === "mooseQuestion" || currentQuestion.name === "beaverQuestion") {
        animalText.style.color = 'black';

        ElementLocationModifier(textContainer, "100px");
        ElementSizeModifier(textContainer, "600px");

        textContainer.style.opacity = '70%';

        instructionText.innerText = "Lue kysymykset ja yritä vastata niihin oikein!";
    }
    else if(currentQuestion.name === "questionEnd") {
        ElementEnabler(endBtn, false, "visible");
        ElementEnabler(nextBtn, true, "hidden");

        ElementLocationModifier(textContainer, "100px", "", "200px");
        ElementSizeModifier(textContainer, "600px");

        endBtn.innerText = "LOPETA";
        animalText.innerText = currentQuestion.question + "\n" + totalRightAnswers + "/6 kysymystä oikein!";

        ElementEnabler(optionBtnF, true, "hidden");
        ElementEnabler(optionBtnS, true, "hidden");
        ElementEnabler(optionBtnT, true, "hidden");
        ElementEnabler(optionBtnFO, true, "hidden");

        instructionText.innerText = "Paina LOPETA lopettaaksesi tai mene takaisin kysymyksiin painamalla PALAA";
    }
}


// GENERAL FUNCTIONS
function ElementEnabler(element, isdisabled, visibility) {
    element.disabled = isdisabled;
    element.style.visibility = visibility;
}
function ElementLocationModifier(element, top, bottom, left, right) {
    element.style.top = top;
    element.style.bottom = bottom;
    element.style.left = left;
    element.style.right = right;
}
function ElementSizeModifier(element, width, height) {
    element.style.width = width;
    element.style.height = height;
}

function SceneChanger(currentPart, whichButton) {

    // FOR FACTS
    if(currentPart === "facts" && whichButton === "next") {
        currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    }
    else if(currentPart === "facts" && whichButton === "prev") {
        currentSceneIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length;
    }

    // FOR QUESTIONS
    else if(currentPart === "qa" && whichButton === "next") {
        currentQuestionIndex = (currentQuestionIndex + 1) % qaQuestions.length;
    }
    else if(currentPart === "qa" && whichButton === "prev") {
        currentQuestionIndex = (currentQuestionIndex - 1) % qaQuestions.length;
    }
}

// EVENT LISTENERS
document.getElementById('next-btn').addEventListener('click', function() {  // NEXT-BTN
    if (part === "facts") {
        SceneChanger(part, "next");
        DisplayScene(currentSceneIndex);
    }
    else if (part === "qa") {
        SceneChanger(part, "next");
        DisplayQuestion(currentQuestionIndex);
    }
});

document.getElementById('prev-btn').addEventListener('click', function() {  // PREVIOUS-BTN
    if (part === "facts") {
        SceneChanger(part, "prev");
        DisplayScene(currentSceneIndex);
    }
    else if (part === "qa") {
        if (part === "qa" && currentQuestionIndex === 0) {
            currentSceneIndex = 14;
            DisplayScene(currentSceneIndex);
        }
        else {
            SceneChanger(part, "prev");
            DisplayQuestion(currentQuestionIndex);
        }
    }
});

document.getElementById('restart-btn').addEventListener('click', function() {   // RESTART-BTN
    window.location.reload();
});

document.getElementById('continue-btn').addEventListener('click', function() {  // CONTINUE-BTN
    currentQuestionIndex = 0;
    DisplayQuestion(currentQuestionIndex);
});

document.getElementById('end-btn').addEventListener('click', function() {
    window.location.reload();
});

document.getElementById('x').addEventListener('click', function() {
    window.location.reload();
});



// OPTION BUTTON EVENTS
optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        const currentQuestion = qaQuestions[currentQuestionIndex];
        const correctAnswerIndex = currentQuestion.correctAnswerIndex;

        optionButtons.forEach((optionButton, btnIndex) => {
            if (btnIndex === correctAnswerIndex) {
                optionButton.style.backgroundImage = "linear-gradient(to right, green, green)";
            } else {
                optionButton.style.backgroundImage = "linear-gradient(to right, red, red)";
            }
        });

        ElementEnabler(optionBtnF, true, "visible");
        ElementEnabler(optionBtnS, true, "visible");
        ElementEnabler(optionBtnT, true, "visible");
        ElementEnabler(optionBtnFO, true, "visible");
        ElementEnabler(prevBtn, true, "visible");

        if (index === correctAnswerIndex && totalRightAnswers < 6) {
            totalRightAnswers++;
        }

        // Run SceneChanger and DisplayQuestion functions after 2500 ms timeout
        setTimeout(() => {
            SceneChanger(part, "next");
            DisplayQuestion(currentQuestionIndex);
        }, 2500);
    });
});

// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});

