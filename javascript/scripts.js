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
let settingsContainer = document.getElementById('settings-container');
let fPartEnd = document.getElementById('fpartend-container');


let optionBtnF = document.getElementById('option1');
let optionBtnS = document.getElementById('option2');
let optionBtnT = document.getElementById('option3');
let optionBtnFO = document.getElementById('option4');

let optionContainer = document.getElementById('option-container');

const optionButtons = document.querySelectorAll('.optionButtons');

let endBtn = document.getElementById('end-btn');
let endTxt = document.getElementById('end-txt');

let motiveContainer = document.getElementById('motive-container');
let motiveBtn = document.getElementById('motive-icon');
let motiveTxt = document.getElementById('motive-txt');
// <-


// --------------- //
// SCENE FUNCTIONS //
// --------------- //
let currentSceneIndex = 0;
let part;   // Just for determining if the user is in facts or questions part of the game.
let isMotiveDisabled = true;


function DisplayScene(sceneIndex) {
    DisplayMotive(true);
    const currentScene = scenes[sceneIndex];

    // Get element properties from data.js
    animalImage.src = currentScene.image;
    scene.style.backgroundImage = "url('" + currentScene.bgImage + "')";
    animalText.innerText = currentScene.text;
    prevBtn.innerText = currentScene.buttonText[0];
    nextBtn.innerText = currentScene.buttonText[1];
    imageCredit.innerText = currentScene.creditText;

    part = "facts";

    // Global modifications for elements
    ElementEnabler(prevBtn, false, "visible");
    ElementEnabler(nextBtn, false, "visible");

    animalText.style.color = 'black';
    animalText.style.textShadow = '0 0 0';
    textContainer.style.opacity = '70%';

    imageContainer.style.textAlign = 'center';
    ElementLocationModifier(animalImage, "0px");
    ElementSizeModifier(animalImage, "700px", "650px");

    // Global element disabling
    ElementEnabler(fPartEnd, true, "hidden");
    ElementEnabler(optionContainer, true, "hidden");
    ElementEnabler(endBtn, true, "hidden");
    ElementEnabler(endTxt, true, "hidden");

    ElementEnabler(optionBtnF, true, "hidden");
    ElementEnabler(optionBtnS, true, "hidden");
    ElementEnabler(optionBtnT, true, "hidden");
    ElementEnabler(optionBtnFO, true, "hidden");


    // First part IF statements for each screen
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

        instructionText.innerText = "Tämä on ohje nappula! \n Täältä voit aina katsoa ohjeita jos niitä tarvitset!";
    }
    // IMAGE PREVIEW SCREENS
    else if (currentScene.name === "Susi-pre" || currentScene.name === "Kettu-pre" || currentScene.name === "Karhu-pre" || currentScene.name === "Metsäkauris-pre" || currentScene.name === "Hirvi-pre" || currentScene.name === "Majava-pre") {

        textContainer.style.backgroundColor = 'transparent';
        textContainer.style.opacity = '0%';
        animalText.style.fontSize = '35px';

        instructionText.innerText = "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja ja lue faktat!";
    } 
    // FACT SCREENS
    else if (currentScene.name === "Susi" || currentScene.name === "Kettu" || currentScene.name === "Karhu" || currentScene.name === "Metsäkauris" || currentScene.name === "Hirvi" || currentScene.name === "Majava") {

        ElementLocationModifier(textContainer, "220px", "", "0px");
        ElementSizeModifier(textContainer, "600px");
        textContainer.style.backgroundColor = 'white';
        animalText.style.fontSize = '22px';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "380px", "260px")

        instructionText.innerText = "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja ja lue faktat!";
    }
    // CONTINUE SCREEN
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

        instructionText.innerText = "Valitse mitä haluat seuraavaksi tehdä alla olevilla painikkeilla.";
    } 
}


let currentQuestionIndex = 0;
let totalRightAnswers = 0;
let userAnswers = {};
let clickedButton;

function DisplayQuestion(questionIndex) {
    DisplayMotive(true);
    const currentQuestion = qaQuestions[questionIndex];

    // Get properties from data.js
    animalImage.src = currentQuestion.image;
    animalText.innerText = currentQuestion.question;
    prevBtn.innerText = currentQuestion.buttonText[0];
    nextBtn.innerText = currentQuestion.buttonText[1];
    imageCredit.innerText = currentQuestion.creditText;

    part = "qa";

    optionBtnF.style.backgroundImage = "linear-gradient(to right, white, #1b4bab)";
    optionBtnS.style.backgroundImage = "linear-gradient(to right, white, #1b4bab)";
    optionBtnT.style.backgroundImage = "linear-gradient(to right, white, #1b4bab)";
    optionBtnFO.style.backgroundImage =  "linear-gradient(to right, white, #1b4bab)";

    ElementEnabler(optionBtnF, false, "visible");
    ElementEnabler(optionBtnS, false, "visible");
    ElementEnabler(optionBtnT, false, "visible");
    ElementEnabler(optionBtnFO, false, "visible");

    ElementEnabler(nextBtn, true, "hidden");
    ElementEnabler(prevBtn, false, "visible");
    ElementLocationModifier(prevBtn, "", "-80px");

    ElementEnabler(fPartEnd, true, "hidden");
    ElementEnabler(endBtn, true, "hidden");
    ElementEnabler(endTxt, true, "hidden");

    animalText.style.color = 'black';
    animalText.style.fontSize = '25px';
    animalText.style.textShadow = '0px 0px 0 #000';
    ElementLocationModifier(textContainer, "100px");
    textContainer.style.backgroundColor = "white";

    if(currentQuestion.name === "wolfQuestion") {
        ElementLocationModifier(textContainer, "220px", "", "0px");
        ElementSizeModifier(textContainer, "600px");
    }
    if(currentQuestion.name === "wolfQuestion" || currentQuestion.name === "foxQuestion" || currentQuestion.name === "bearQuestion" || currentQuestion.name === "roedeerQuestion" || currentQuestion.name === "mooseQuestion" || currentQuestion.name === "beaverQuestion") {
        ElementLocationModifier(textContainer, "100px", "", "0px");
        ElementSizeModifier(textContainer, "600px");

        textContainer.style.opacity = '80%';

        instructionText.innerText = "Lue kysymykset ja yritä vastata niihin oikein lukemiesi faktojen perusteella!";
    }
    else if(currentQuestion.name === "questionEnd") {
        ElementLocationModifier(textContainer, "100px", "", "0px");
        ElementSizeModifier(textContainer, "600px");

        endBtn.innerText = "ALOITA ALUSTA";
        animalText.style.fontSize = '35px';
        animalText.innerText = currentQuestion.question + "\n" + "\n" + totalRightAnswers + "/6 kysymystä oikein!";

        ElementLocationModifier(prevBtn, "", "-90px");

        ElementEnabler(optionBtnF, true, "hidden");
        ElementEnabler(optionBtnS, true, "hidden");
        ElementEnabler(optionBtnT, true, "hidden");
        ElementEnabler(optionBtnFO, true, "hidden");

        ElementEnabler(endBtn, false, "visible");
        ElementEnabler(endTxt, false, "visible");

        animalText.style.textShadow = '-1px 0px 0 #000, -2px 0px 0 #000, -3px 0px 0 #000, -4px 0px 0 #000, -5px 0px 0 #000';
        textContainer.style.backgroundColor = "transparent";
        animalText.style.color = "white";

        instructionText.innerText = "Paina LOPETA lopettaaksesi tai palaa takaisin kysymyksiin painamalla PALAA";
    }

    // Check if the user has answered
    if (userAnswers.hasOwnProperty(currentQuestion.name)) {
        const userAnswerIndex = userAnswers[currentQuestion.name];
        const correctAnswerIndex = currentQuestion.correctAnswerIndex;

        optionButtons.forEach((optionButton, btnIndex) => {
            if (btnIndex === correctAnswerIndex) {
                optionButton.style.backgroundImage = "linear-gradient(to right, green, green)";
            } else {
                optionButton.style.backgroundImage = "linear-gradient(to right, red, red)";
            }
        });

        if (userAnswerIndex === correctAnswerIndex) {
            optionButtons[userAnswerIndex].style.backgroundImage = "linear-gradient(to right, green, green)";
        } else {
            optionButtons[userAnswerIndex].style.backgroundImage = "linear-gradient(to right, #8a1800, #8a1800)";
        }

        // Disable all option buttons
        optionButtons.forEach(button => button.disabled = true);

        ElementEnabler(nextBtn, false, "visible");
    }
}
// --------------- //
// SCENE FUNCTIONS //
// --------------- //

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

// SCENE CHANGER FUNCTION
function SceneChecker(currentPart, whichButton) {

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

// DISPLAY MOTIVE SCREEN
function DisplayMotive(disabled) {
    if(disabled === true) {
        motiveContainer.disabled = true;
        motiveContainer.style.visibility = "hidden";
        motiveTxt.disabled = true;
        motiveTxt.style.visibility = "hidden";
        motiveTxt.innerText = "";

        isMotiveDisabled = true;
    }
    else if(disabled === false) {
        motiveContainer.disabled = false;
        motiveContainer.style.visibility = "visible";
        motiveTxt.disabled = false;
        motiveTxt.style.visibility = "visible";
        motiveTxt.innerText = "Tämä peli kertoo kiinnostavia faktoja Suomen eläimistä! \n Peli on tehty yksinkertaiseksi ja helpoksi ymmärtää. \n \n Web-suunnittelu: \n Niklas Hillman \n Ohjelmointi: \n Niklas Hillman \n Gradia, Tieto- ja viestintätekniikan perustutkinto, toinen vuosi";

        isMotiveDisabled = false;
    }
}

// --------------- //
// EVENT LISTENERS //
// --------------- //
document.getElementById('next-btn').addEventListener('click', function() {  // NEXT-BTN
    if (part === "facts") {
        SceneChecker(part, "next");
        DisplayScene(currentSceneIndex);
    }
    else if (part === "qa") {
        SceneChecker(part, "next");
        DisplayQuestion(currentQuestionIndex);
    }
});

document.getElementById('prev-btn').addEventListener('click', function() {  // PREVIOUS-BTN
    if (part === "facts") {
        SceneChecker(part, "prev");
        DisplayScene(currentSceneIndex);
    }
    else if (part === "qa") {
        if (part === "qa" && currentQuestionIndex === 0) {
            currentSceneIndex = 14;
            DisplayScene(currentSceneIndex);
        }
        else {
            SceneChecker(part, "prev");
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



// OPTION BUTTONS
optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentQuestion = qaQuestions[currentQuestionIndex];
        const correctAnswerIndex = currentQuestion.correctAnswerIndex;

        // Save answer
        userAnswers[currentQuestion.name] = index;

        // Set all button colors on click
        optionButtons.forEach((optionButton, btnIndex) => {
            if (btnIndex === correctAnswerIndex) {
                optionButton.style.backgroundImage = "linear-gradient(to right, green, green)";
            } else {
                optionButton.style.backgroundImage = "linear-gradient(to right, red, red)";
            }
        });

        // If right answer was clicked, set colors individually
        if (index === correctAnswerIndex) {
            button.style.backgroundImage = "linear-gradient(to right, green, green)";
        }
        else {
            button.style.backgroundImage = "linear-gradient(to right, #8a1800, #8a1800)";   // DARK RED if the answer is wrong
        }

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
            SceneChecker(part, "next");
            DisplayQuestion(currentQuestionIndex);
        }, 2500);
    });
});

document.getElementById('motive-icon').addEventListener('click', function() {   // MOTIVE-ICON
    if(isMotiveDisabled === true) {
        DisplayMotive(false);
    }
    else if(isMotiveDisabled === false) {
        DisplayMotive(true);
    }
});


// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});
// --------------- //
// EVENT LISTENERS //
// --------------- //

