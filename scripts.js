
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
        text: "Tiesitkö, että susi on yöeläin? Tämä tarkoittaa että ne liikkuvat pääosin öisin ja hämärällä. Sudet myös saalistavat usein yöllä.",
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
        text: "Noin 10% Suomen ketuista on 'hopeakettuja', niiden turkin väri vaihtelee hopeanvärisestä lähes mustaan.",
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
        text: "Tiesitkö, että karhu ei ole ainoastaan Suomen suurin petoeläin, vaan koko Euroopan!",
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
        text: "Metsäkauriit ovat taitavia uimareita!",
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
        text: "Aikuinen hirvi voi painaa jopa huimat 800 kilogrammaa! Se on noin kolme moottoripyörää!",
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

    if (currentScene.name === 'end') {
        SetControlsVisibility("show");
        SetControlsVisibility("hide-control")
    } 
    else {
        SetControlsVisibility("hide");
        SetControlsVisibility("show-control")
    }

    if (currentSceneIndex % 2 == 1) {
        document.getElementById('text-container').style.backgroundColor = "white";
    } 
    else {
        document.getElementById('text-container').style.backgroundColor = "transparent";
    }


    if (currentSceneIndex === 0 || currentSceneIndex === 1) {
        document.getElementById('language').style.opacity=1;
    }
    else {
        document.getElementById('language').style.opacity=0;
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

