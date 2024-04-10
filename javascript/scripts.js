import { scenes } from '../javascript/data.js';

let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let animalImage = document.getElementById('animal-image');
let animalText = document.getElementById('animal-text');
let textContainer = document.getElementById('text-container');
let imageContainer = document.getElementById('image-container');
let languageContainer = document.getElementById('language-container');
let imageCredit = document.getElementById('image-credit');


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

    if (currentScene.name === 'main' || currentScene.name === 'ohjeet') {
        languageContainer.style.opacity=1;
    }
    else {
        languageContainer.style.opacity=0;
    }
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
    
    if (currentSceneIndex % 2 == 1) {
        textContainer.style.backgroundColor = "white";
    } 
    else {
        textContainer.style.backgroundColor = "transparent";
    }
}
function SetControlsVisibility(choice) {
    var end = document.getElementById('end-container');
    var control = document.getElementById('control-container');

    if (choice === "hide-end") {
        end.style.visibility = 'hidden';
        end.disabled = true;
    } 
    else if (choice === "show-end") {
        end.style.visibility = 'visible';
        end.disabled = false;
    }

    if (choice === "hide-control") {
        control.style.visibility = 'hidden';
        control.disabled = true;
    }
    else if (choice === "show-control") {
        control.style.visibility = 'visible';
        control.disabled = false;
    }
}

// NEXT BTN
document.getElementById('next-btn').addEventListener('click', function() {
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    DisplayScene(currentSceneIndex);
});

// PREVIOUS BTN
document.getElementById('prev-btn').addEventListener('click', function() {
    currentSceneIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length;
    DisplayScene(currentSceneIndex);
});

// RESTART BTN
document.getElementById('restart-btn').addEventListener('click', function() {
    currentSceneIndex = 0;
    DisplayScene(currentSceneIndex);
});

// END BTN
document.getElementById('end-btn').addEventListener('click', function() {
    
});

// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});

