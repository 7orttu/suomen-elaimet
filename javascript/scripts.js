import { scenes } from '../javascript/data.js';
import { qaQuestions } from '../javascript/data.js';

// FACT PART
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let restartBtn = document.getElementById('restart-btn');
let continueBtn = document.getElementById('continue-btn');

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


// QUESTION PART
let optionBtnF = document.getElementById('option1');
let optionBtnS = document.getElementById('option2');
let optionBtnT = document.getElementById('option3');
let optionBtnFO = document.getElementById('option4');

let optionContainer = document.getElementById('option-container');

let endTxt = document.getElementById('end-txt');
let endBtn = document.getElementById('end-btn');

const optionButtons = document.querySelectorAll('.optionButtons');



let currentSceneIndex = 0;
let part;   // Just for determining if the user is in facts or questions part of the game.

function DisplayScene(sceneIndex) {
    const currentScene = scenes[sceneIndex];

    animalImage.src = currentScene.image;
    scene.style.backgroundImage = "url('" + currentScene.bgImage + "')";
    animalText.innerText = currentScene.text;
    prevBtn.innerText = currentScene.buttonText[0];
    nextBtn.innerText = currentScene.buttonText[1];
    imageCredit.innerText = currentScene.creditText;

    part = "facts";

    ElementEnabler(optionContainer, true, "hidden");
        
    ElementEnabler(endBtn, true, "hidden");
    ElementEnabler(endTxt, true, "hidden");

    // IF statements for each fact screen ->
    if (currentScene.name === "main") {
        ElementEnabler(fPartEnd, true, "hidden");

        ElementEnabler(prevBtn, true, "hidden");
        ElementEnabler(nextBtn, false, "visible");

        ElementLocationModifier(nextBtn, "", "-10px", "", "13%");
        ElementLocationModifier(prevBtn, "", "-80px", "", "-22%");

        ElementLocationModifier(textContainer, "50px");
        ElementSizeModifier(textContainer, "700px");
        textContainer.style.backgroundColor = 'transparent';
        textContainer.style.opacity = '100%';
        animalText.style.fontSize = '70px';
        animalText.style.color = '#1b4bab';
        animalText.style.textShadow = '-1px 0px 0 #000, -2px 0px 0 #000, -3px 0px 0 #000, -4px 0px 0 #000, -5px 0px 0 #000, -5px 1px 0 #000, -5px 2px 0 #000, -5px 3px 0 #000';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")
        imageContainer.style.textAlign = 'center';

        instructionText.innerText = "Paina ALOITA nappia";
    } 
    else if (currentScene.name === "ohjeet") {
        ElementEnabler(fPartEnd, true, "hidden");

        ElementEnabler(prevBtn, false, "visible");
        ElementEnabler(nextBtn, false, "visible");

        ElementLocationModifier(textContainer, "75px", "", "15px");
        ElementSizeModifier(textContainer, "250px");
        textContainer.style.backgroundColor = 'white';
        textContainer.style.opacity = '100%';
        animalText.style.fontSize = '25px';
        animalText.style.color = 'black';
        animalText.style.textShadow = '0 0 0';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")
        imageContainer.style.textAlign = 'center';

        instructionText.innerText = "Tämä on ohje nappula! Paina JATKA niin voit jatkaa faktoihin!";
    }
    else if (currentScene.name === "Susi-pre" || currentScene.name === "Kettu-pre" || currentScene.name === "Karhu-pre" || currentScene.name === "Metsäkauris-pre" || currentScene.name === "Hirvi-pre" || currentScene.name === "Majava-pre") {
        ElementEnabler(fPartEnd, true, "hidden");

        ElementEnabler(prevBtn, false, "visible");
        ElementEnabler(nextBtn, false, "visible");

        ElementLocationModifier(textContainer, "50px", "", "0px");
        ElementSizeModifier(textContainer, "700px");
        textContainer.style.backgroundColor = 'transparent';
        textContainer.style.opacity = '0%';
        animalText.style.fontSize = '35px';
        animalText.style.color = 'black';
        animalText.style.textShadow = '0 0 0';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")
        imageContainer.style.textAlign = 'center';

        instructionText.innerText = "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja!";
    } 
    else if (currentScene.name === "Susi" || currentScene.name === "Kettu" || currentScene.name === "Karhu" || currentScene.name === "Metsäkauris" || currentScene.name === "Hirvi" || currentScene.name === "Majava") {
        ElementEnabler(fPartEnd, true, "hidden");

        ElementEnabler(prevBtn, false, "visible");
        ElementEnabler(nextBtn, false, "visible");

        ElementLocationModifier(textContainer, "220px");
        ElementSizeModifier(textContainer, "700px");
        textContainer.style.backgroundColor = 'white';
        textContainer.style.opacity = '80%';
        animalText.style.fontSize = '22px';
        animalText.style.color = 'black';
        animalText.style.textShadow = '0 0 0';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "380px", "260px")
        imageContainer.style.textAlign = 'center';

        "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja!";
    }
    else if (currentScene.name === "end") {
        ElementEnabler(fPartEnd, false, "visible");

        ElementEnabler(prevBtn, false, "visible");
        ElementEnabler(nextBtn, true, "hidden");

        ElementLocationModifier(textContainer, "50px");
        ElementSizeModifier(textContainer, "700px");
        textContainer.style.backgroundColor = "white";
        textContainer.style.opacity = '75%';
        animalText.style.color = 'blue';
        animalText.style.opacity = '100%';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")
        imageContainer.style.textAlign = 'center';

        restartBtn.innerText = "ALOITA ALUSTA";
        continueBtn.innerText = "JATKA";

        instructionText.innerText = "Valitse mitä haluat seuraavaksi tehdä alhaalla olevilla painikkeilla.";
    } 
    // <-
}


let currentQuestionIndex = 0;

function DisplayQuestion(questionIndex) {
    const currentQuestion = qaQuestions[questionIndex];

    animalImage.src = currentQuestion.image;
    animalText.innerText = currentQuestion.question;
    prevBtn.innerText = currentQuestion.buttonText[0];
    nextBtn.innerText = currentQuestion.buttonText[1];
    imageCredit.innerText = currentQuestion.creditText;

    part = "qa";

    ElementEnabler(nextBtn, false, "visible");

    if(currentQuestion.name === "wolfQuestion") {
        ElementEnabler(optionContainer, false, "visible");

        ElementEnabler(fPartEnd, true, "hidden");
        
        ElementEnabler(endBtn, true, "hidden");
        ElementEnabler(endTxt, true, "hidden");

        animalText.style.color = 'black';
    }
    if(currentQuestion.name === "wolfQuestion" || currentQuestion.name === "foxQuestion" || currentQuestion.name === "bearQuestion" || currentQuestion.name === "roedeerQuestion" || currentQuestion.name === "mooseQuestion" || currentQuestion.name === "beaverQuestion") {
        ElementEnabler(optionContainer, false, "visible");

        ElementEnabler(fPartEnd, true, "hidden");
        
        ElementEnabler(endBtn, true, "hidden");
        ElementEnabler(endTxt, true, "hidden");

        animalText.style.color = 'black';

        instructionText.innerText = "Lue kysymykset ja yritä vastata niihin oikein!";
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
    else if (part === "qa" && currentQuestionIndex === 0) {
        currentSceneIndex = 14;
        DisplayScene(currentSceneIndex);
    }
    else {
        SceneChanger(part, "prev");
        DisplayScene(currentSceneIndex);
    }
});

document.getElementById('restart-btn').addEventListener('click', function() {   // RESTART-BTN
    window.location.reload();
});

document.getElementById('continue-btn').addEventListener('click', function() {  // CONTINUE-BTN
    currentQuestionIndex = 0;
    DisplayQuestion(currentQuestionIndex);
});

/*  OPTION BUTTON EVENTS
optionButtons.forEach((button, index) => {  // OPTION BUTTONS
    button.addEventListener('click', () => {

        const currentQuestion = qaQuestions[currentQuestionIndex];

        if (index === currentQuestion.correctAnswerIndex) {
            button.style.backgroundColor = 'green';

            if (!index === currentQuestion.correctAnswerIndex)
            setTimeout(NextQuestion, 2500);
        } 
        else {
            optionButtons.forEach(function(optionButton) {
                optionButton.style.backgroundColor = 'red';

            });
            setTimeout(NextQuestion, 2500);
        }
    });
});
*/


// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});

