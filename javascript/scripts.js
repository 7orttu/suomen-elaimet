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
        prevBtn.style.visibility ='hidden';
        prevBtn.style.right = '-22%';
        prevBtn.style.bottom = '-80px';

        nextBtn.style.right = '13%';
        nextBtn.style.bottom = '-10px';

        animalText.style.fontSize = '70px';

        instructionText.innerText = "Paina ALOITA nappia";
    } 
    else {
        prevBtn.disabled = false;
        prevBtn.style.visibility='visible';

        animalText.style.fontSize = '35px';
        animalText.style.color = 'black';

        instructionText.innerText = "Paina SEURAAVA ja EDELLINEN nappeja vaihtaaksesi ruutuja!";
    }
    // --- // --- //
    // --- // --- //

    if (currentScene.name === 'end') {
        SetFirstPartEndControlsVisibility("show-end");
        SetFirstPartEndControlsVisibility("hide-control")

        restartBtn.innerText = "ALOITA ALUSTA";
        continueBtn.innerText = "JATKA";

        nextBtn.disabled = true;
        nextBtn.style.visibility = 'hidden';

        animalText.style.color = 'blue';
        animalText.style.opacity = '100%';
        textContainer.style.opacity = '100%';

        instructionText.innerText = "Valitse mitä haluat seuraavaksi tehdä alhaalla olevilla painikkeilla.";
    } 
    else {
        SetFirstPartEndControlsVisibility("hide-end");
        SetFirstPartEndControlsVisibility("show-control")

        restartBtn.innerText = "";
        continueBtn.innerText = "";

        nextBtn.disabled = false;
        nextBtn.style.visibility = 'visible';

        animalText.style.color = 'black';
        animalText.style.opacity = '100%';
        textContainer.style.opacity = '75%';
    }
    // --- // --- //
    // --- // --- //
    
    if (currentSceneIndex % 2 == 1) {
        textContainer.style.backgroundColor = "white";
    } 
    else if (currentScene.name === "end") {
        textContainer.style.backgroundColor = "white";
        textContainer.style.opacity = '80%';
    }
    else {
        textContainer.style.backgroundColor = "transparent";
    }
    // --- // --- //
    // --- // --- //
}

// Sets the end-containers visibility which contains the restart and continue buttons.
function SetFirstPartEndControlsVisibility(choice) {
    var end = document.getElementById('end-container');

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

