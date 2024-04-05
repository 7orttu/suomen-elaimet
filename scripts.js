import { scenes } from './data.js';

let currentSceneIndex = 0;


function DisplayScene(index) {
    const currentScene = scenes[index];

    let prevBtn = document.getElementById('prev-btn');  // Previous button variable
    let nextBtn = document.getElementById('next-btn')   // Next button variable
    let animalImage = document.getElementById('animal-image');
    let animalText = document.getElementById('animal-text');
    let textContainer = document.getElementById('text-container');
    let imageContainer = document.getElementById('image-container');
    let languageContainer = document.getElementById('language-container');


    if (currentScene.name === 'main') {
        prevBtn = document.getElementById('prev-btn');
        prevBtn.disabled = true;

        document.getElementById('animal-text').style.fontSize = '70px';
    } 
    else {
        prevBtn = document.getElementById('prev-btn');
        prevBtn.disabled = false;

        document.getElementById('animal-text').style.fontSize = '35px';
    }
    // --- // --- //

    if (currentScene.name === 'main' || currentScene.name === 'ohjeet') {
        document.getElementById('language').style.opacity=1;
    }
    else {
        document.getElementById('language').style.opacity=0;
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
        document.getElementById('text-container').style.backgroundColor = "white";
    } 
    else {
        document.getElementById('text-container').style.backgroundColor = "transparent";
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

