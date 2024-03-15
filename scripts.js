const scenes = [
    {
        name: "main",
        image: "Materials/karhu-pääkuva.jpg",
        text: "pelin nimi"
    },
    {
        name: "ohjeet",
        image: "Materials/karhu-pääkuva.jpg",
        text: "ohjeet"
    },
    {
        name: "Susi",
        image: "Materials/susi-sisältökuva.jpg",
        text: "Sudesta fakta"
    },
    {
        name: "Kettu",
        image: "Materials/kettu-sisältökuva.jpg",
        text: "Ketusta fakta"
    },
    {
        name: "end",
        image: "Materials/karhu-pääkuva.jpg",
        text: "Karhusta fakta"
    }
]

let currentSceneIndex = 0;

function displayScene(index) {
    const currentScene = scenes[index];
    document.getElementById('image-container').innerHTML = `<img src="${currentScene.image}">`;
    document.getElementById('text-container').innerText = currentScene.text;
}
displayScene(currentSceneIndex);
  

// NEXT BTN
document.getElementById('next-btn').addEventListener('click', function() {
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    displayScene(currentSceneIndex);
});

// PREVIOUS BTN
document.getElementById('prev-btn').addEventListener('click', function() {
    currentSceneIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length;
    displayScene(currentSceneIndex);
});

