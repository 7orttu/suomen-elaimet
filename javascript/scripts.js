import { scenes } from '../javascript/data.js';

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
let languageContainer = document.getElementById('language-container');
let fPartEnd = document.getElementById('fpartend-container');


let currentSceneIndex = 0;

function DisplayScene(sceneIndex) {
    const currentScene = scenes[sceneIndex];

    animalImage.src = currentScene.image;
    scene.style.backgroundImage = "url('" + currentScene.bgImage + "')";
    animalText.innerText = currentScene.text;
    prevBtn.innerText = currentScene.buttonText[0];
    nextBtn.innerText = currentScene.buttonText[1];
    imageCredit.innerText = currentScene.creditText;

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
        animalText.style.textShadow = '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000';

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
        animalText.style.fontSize = '30px';
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
        textContainer.style.opacity = '70%';
        animalText.style.color = 'blue';
        animalText.style.opacity = '100%';

        ElementLocationModifier(animalImage, "0px");
        ElementSizeModifier(animalImage, "700px", "650px")
        imageContainer.style.textAlign = 'center';

        restartBtn.innerText = "ALOITA ALUSTA";
        continueBtn.innerText = "JATKA";

        instructionText.innerText = "Valitse mitä haluat seuraavaksi tehdä alhaalla olevilla painikkeilla.";
    } 
    else {

    }
}


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

