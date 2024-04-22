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

    if (currentScene.name === 'main') {
        prevBtn.disabled = true;
        animalText.style.fontSize = '70px';
    } 
    else {
        prevBtn.disabled = false;
        animalText.style.fontSize = '35px';
    }
    // --- // --- //
    // --- // --- //

    if (currentScene.name === 'end') {
        SetControlsVisibility("show-end");
        SetControlsVisibility("hide-control")
    } 
    else {
        SetControlsVisibility("hide-end");
        SetControlsVisibility("show-control")
    }
    // --- // --- //
    // --- // --- //
    
    if (currentSceneIndex % 2 == 1) {
        textContainer.style.backgroundColor = "white";
    } 
    else {
        textContainer.style.backgroundColor = "transparent";
    }
    // --- // --- //
    // --- // --- //
}

function SetControlsVisibility(choice) {
    var end = document.getElementById('end-container');
    var control = document.getElementById('control-container');

    if (choice === "hide-control") {
        control.style.visibility = 'hidden';
        control.disabled = true;
    }
    else if (choice === "show-control") {
        control.style.visibility = 'visible';
        control.disabled = false;
    }

    if (choice === "hide-end") {
        end.style.visibility = 'hidden';
        end.disabled = true;
    } 
    else if (choice === "show-end") {
        end.style.visibility = 'visible';
        end.disabled = false;
    }
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
    // currentSceneIndex = 0;
    // DisplayScene(currentSceneIndex);
});

document.getElementById('continue-btn').addEventListener('click', function() {  // CONTINUE
    RedirectToQuestions();
});


// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});

