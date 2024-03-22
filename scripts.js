
const scenes = [
    {
        name: "main",
        image: "Materials/karhu-pääkuva.jpg",
        text: "pelin nimi",
        buttonText: ["LOPETA", "ALOITA"]
    },
    {
        name: "ohjeet",
        image: "Materials/karhu-pääkuva.jpg",
        text: "ohjeet",
        buttonText: ["TAKAISIN", "JATKA"]
    },
    {   // preview
        name:"Susi-pre",
        image: "Materials/susi-sisältökuva.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Susi",
        image: "Materials/susi-sisältökuva.jpg",
        text: "Sudesta fakta",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Kettu-pre",
        image: "Materials/kettu-sisältökuva.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Kettu",
        image: "Materials/kettu-sisältökuva.jpg",
        text: "Ketusta fakta",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Karhu-pre",
        image: "Materials/karhu-sisältökuva.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Karhu",
        image: "Materials/karhu-sisältökuva.jpg",
        text: "Karhusta fakta",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: "Materials/metsäkauris-sisältökuva.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Metsäkauris",
        image: "Materials/metsäkauris-sisältökuva.jpg",
        text: "Metsäkauriksesta fakta",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Hirvi-pre",
        image: "Materials/hirvi-sisältökuva.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Hirvi",
        image: "Materials/hirvi-sisältökuva.jpg",
        text: "Hirvestä fakta",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "end",
        image: "Materials/karhu-pääkuva.jpg",
        text: "LOPPU",
        buttonText: ["TAKAISIN", "LOPETA"]
    }
]

let currentSceneIndex = 0;


function DisplayScene(index) {
    const currentScene = scenes[index];
    document.getElementById('animal-image').src = currentScene.image;
    document.getElementById('animal-text').innerText = currentScene.text;
    document.getElementById('prev-btn').innerText = currentScene.buttonText[0];
    document.getElementById('next-btn').innerText = currentScene.buttonText[1];


    if (currentSceneIndex % 2 == 1) {
        document.getElementById('text-container').style.backgroundColor = "white";
    } 
    else {
        document.getElementById('text-container').style.backgroundColor = "transparent";
    }
    else {
        document.getElementById('text-container').style.backgroundColor = "white";
    }
}
function SetControlsVisibility(choice) {
    var end = document.getElementById('end-container');
    var control = document.getElementById('control-container');

    if (choice === "hide") {
        end.style.visibility = 'hidden';
        end.disabled = true;
    } 
    else if (choice === "show"){
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

// DOM
document.addEventListener('DOMContentLoaded', function() {
    DisplayScene(currentSceneIndex);
});

