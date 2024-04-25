import { scenes } from '../javascript/data.js';

let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');

let restartBtn = document.getElementById('restart-btn');
let continueBtn = document.getElementById('continue-btn');

let animalImage = document.getElementById('animal-image');
let animalText = document.getElementById('animal-text');
let textContainer = document.getElementById('text-container');
let imageContainer = document.getElementById('image-container');

let languageContainer = document.getElementById('language-container');
let imageCredit = document.getElementById('image-credit');
let instructionText = document.getElementById('instruction')


let currentSceneIndex = 0;

function DisplayScene(sceneIndex) {
    const currentScene = scenes[sceneIndex];

    animalImage.src = currentScene.image;
    animalText.innerText = currentScene.text;
    prevBtn.innerText = currentScene.buttonText[0];
    nextBtn.innerText = currentScene.buttonText[1];
    imageCredit.innerText = currentScene.creditText;

    if (currentScene.name === "main") {
        SetFirstPartEndControlsVisibility("hide-end");
        HidePrevButton();
        ShowNextButton();

        animalText.style.fontSize = '70px';
        animalText.style.color = '#1b4bab';
        animalText.style.textShadow = '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000';

        textContainer.style.backgroundColor = 'transparent';
        textContainer.style.opacity = '100%';

        instructionText.innerText = "Paina ALOITA nappia";
    } 
    else if (currentScene.name === "ohjeet") {
        SetFirstPartEndControlsVisibility("hide-end");
        ShowNextButton();
        ShowPrevButton();

        nextBtn.style.right = '13%';
        nextBtn.style.bottom = '-10px';

        animalText.style.fontSize = '35px';
        animalText.style.color = 'black';
        animalText.style.textShadow = '0 0 0';

        textContainer.style.backgroundColor = 'white';

        instructionText.innerText = "Tämä on ohje nappula!";
    }
    else if (currentScene.name === "Susi-pre" || currentScene.name === "Kettu-pre" || currentScene.name === "Karhu-pre" || currentScene.name === "Metsäkauris-pre" || currentScene.name === "Hirvi-pre" || currentScene.name === "Majava-pre") {
        SetFirstPartEndControlsVisibility("hide-end");
        ShowNextButton();
        ShowPrevButton();

        animalText.style.fontSize = '35px';
        animalText.style.color = 'black';
        animalText.style.textShadow = '0 0 0';

        textContainer.style.backgroundColor = 'transparent';
    } 
    else if (currentScene.name === "Susi" || currentScene.name === "Kettu" || currentScene.name === "Karhu" || currentScene.name === "Metsäkauris" || currentScene.name === "Hirvi" || currentScene.name === "Majava") {
        SetFirstPartEndControlsVisibility("hide-end");
        ShowNextButton();
        ShowPrevButton();

        animalText.style.fontSize = '35px';
        animalText.style.color = 'black';
        animalText.style.textShadow = '0 0 0';

        textContainer.style.backgroundColor = 'white';
    }
    else if (currentScene.name === "end") {
        SetFirstPartEndControlsVisibility("show-end");
        HideNextButton();

        restartBtn.innerText = "ALOITA ALUSTA";
        continueBtn.innerText = "JATKA";

        animalText.style.color = 'blue';
        animalText.style.opacity = '100%';
        textContainer.style.backgroundColor = "white";
        textContainer.style.opacity = '70%';

        instructionText.innerText = "Valitse mitä haluat seuraavaksi tehdä alhaalla olevilla painikkeilla.";
    } 
    else {

    }
    // --- // --- //
    // --- // --- //
}

// Sets the "end-container" hidden or visible.
function SetFirstPartEndControlsVisibility(choice) {
    var end = document.getElementById('fpartend-container');

    if (choice === "hide-end") {
        end.style.visibility = 'hidden';
        end.disabled = true;
    } 
    else if (choice === "show-end") {
        end.style.visibility = 'visible';
        end.disabled = false;
    }
}
function ShowNextButton() {
    nextBtn.disabled = false;
    nextBtn.style.visibility = 'visible';
    nextBtn.style.right = '13%';
    nextBtn.style.bottom = '-10px';
}
function HideNextButton() {
    nextBtn.disabled = true;
    nextBtn.style.visibility = 'hidden';
    nextBtn.style.right = '13%';
    nextBtn.style.bottom = '-10px';
}
function ShowPrevButton() {
    prevBtn.disabled = false;
    prevBtn.style.visibility = 'visible';
    prevBtn.style.right = '-22%';
    prevBtn.style.bottom = '-80px';
}
function HidePrevButton() {
    prevBtn.disabled = true;
    prevBtn.style.visibility = 'hidden';
    prevBtn.style.right = '-22%';
    prevBtn.style.bottom = '-80px';
}



function RedirectToQuestions() {
    window.location.href = './pages/qa.html';
}


// EVENT LISTENERS

document.getElementById('next-btn').addEventListener('click', function() {  // NEXT
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    DisplayScene(currentSceneIndex);
});

document.getElementById('prev-btn').addEventListener('click', function() {  // PREVIOUS
    currentSceneIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length;
    DisplayScene(currentSceneIndex);
});

document.getElementById('restart-btn').addEventListener('click', function() {   // RESTART
    window.location.reload();
});

document.getElementById('continue-btn').addEventListener('click', function() {  // CONTINUE
    RedirectToQuestions();
});


// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});

