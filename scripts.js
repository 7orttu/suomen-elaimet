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

let animalArrayID = 0;

function sceneChangerNext(){
    const currentAnimal = animals[animalArrayID];
    const imageToSet = animals[animalArrayID].image;

    const currentImage = document.getElementById("animal-image");
    currentImage.src = imageToSet;

    animalArrayID = (animalArrayID + 1) % animals.length;
}

