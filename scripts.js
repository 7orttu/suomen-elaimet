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
    {   // preview
        name:"Susi-pre",
        image: "Materials/susi-sisältökuva.jpg",
        text: ""
    },
    {
        name: "Susi",
        image: "Materials/susi-sisältökuva.jpg",
        text: "Sudesta fakta"
    },
    {   // preview
        name: "Kettu-pre",
        image: "Materials/kettu-sisältökuva.jpg",
        text: ""
    },
    {
        name: "Kettu",
        image: "Materials/kettu-sisältökuva.jpg",
        text: "Ketusta fakta"
    },
    {   // preview
        name: "Karhu-pre",
        image: "Materials/karhu-sisältökuva.jpg",
        text: ""
    },
    {
        name: "Karhu",
        image: "Materials/karhu-sisältökuva.jpg",
        text: "Karhusta fakta"
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: "Materials/metsäkauris-sisältökuva.jpg",
        text: ""
    },
    {
        name: "Metsäkauris",
        image: "Materials/metsäkauris-sisältökuva.jpg",
        text: "Metsäkauriksesta fakta"
    },
    {   // preview
        name: "Hirvi-pre",
        image: "Materials/hirvi-sisältökuva.jpg",
        text: ""
    },
    {
        name: "Hirvi",
        image: "Materials/hirvi-sisältökuva.jpg",
        text: "Hirvestä fakta"
    },
    {
        name: "end",
        image: "Materials/karhu-pääkuva.jpg",
        text: "LOPPU"
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

