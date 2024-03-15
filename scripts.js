const animals = [
    {
        name: "Susi",
        image: "Materials/susi-sisältökuva.jpg"
    },
    {
        name: "Kettu",
        image: "Materials/kettu-sisältökuva.jpg"
    },
]

let animalArrayID = 0;

function sceneChangerNext(){
    const currentAnimal = animals[animalArrayID];
    const imageToSet = animals[animalArrayID].image;

    const currentImage = document.getElementById("animal-image");
    currentImage.src = imageToSet;

    animalArrayID = (animalArrayID + 1) % animals.length;
}

