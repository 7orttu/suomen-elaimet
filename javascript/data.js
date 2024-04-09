const scenes = [
    {
        name: "main",
        image: "images/resized-pictures/main.jpg",
        text: "Suomen Eläimet",
        buttonText: ["", "ALOITA"],
        creditText: "LTapsaH, Pixabay"
    },
    {
        name: "ohjeet",
        image: "images/resized-pictures/main.jpg",
        text: "OHJEET \n Paina 'seuraava' ja 'edellinen' nappeja vaihtaaksesi ruutuja!",
        buttonText: ["TAKAISIN", "JATKA"],
        creditText: "LTapsaH, Pixabay"
    },
    {   // preview
        name:"Susi-pre",
        image: "images/resized-pictures/wolf.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "christels, Pixabay"
    },
    {
        name: "Susi",
        image: "images/resized-pictures/wolf.jpg",
        text: "SUSI \n Tiesitkö, että susi on yöeläin? Tämä tarkoittaa että ne liikkuvat pääosin öisin ja hämärällä. Sudet myös saalistavat usein yöllä.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "christels, Pixabay"
    },
    {   // preview
        name: "Kettu-pre",
        image: "images/resized-pictures/fox.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "azazelok, Pixabay"
    },
    {
        name: "Kettu",
        image: "images/resized-pictures/fox.jpg",
        text: "KETTU \n Noin 10% Suomen ketuista on 'hopeakettuja', niiden turkin väri vaihtelee hopeanvärisestä lähes mustaan.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "azazelok, Pixabay"
    },
    {   // preview
        name: "Karhu-pre",
        image: "images/resized-pictures/bear.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Bergadder, Pixabay"
    },
    {
        name: "Karhu",
        image: "images/resized-pictures/bear.jpg",
        text: "KARHU \n Tiesitkö, että karhu ei ole ainoastaan Suomen suurin petoeläin, vaan koko Euroopan!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Bergadder, Pixabay"
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: "images/resized-pictures/roedeer.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Luboshouska, Pixabay"
    },
    {
        name: "Metsäkauris",
        image: "images/resized-pictures/roedeer.jpg",
        text: "METSÄKAURIS \n Metsäkauriit ovat taitavia uimareita!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Luboshouska, Pixabay"
    },
    {   // preview
        name: "Hirvi-pre",
        image: "images/resized-pictures/moose.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "12019, Pixabay"
    },
    {
        name: "Hirvi",
        image: "images/resized-pictures/moose.jpg",
        text: "HIRVI \n Aikuinen hirvi voi painaa jopa huimat 800 kilogrammaa! Se on noin kolme moottoripyörää!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "12019, Pixabay"
    },
    {   // preview
        name: "Majava-pre",
        image: "images/resized-pictures/beaver.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "SteveRaubenstine, Pixabay"
    },
    {
        name: "Majava",
        image: "images/resized-pictures/beaver.jpg",
        text: "MAJAVA \n Tiesitkö, että majavat voivat elää jopa yli 20 vuotiaiksi?",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "SteveRaubenstine, Pixabay"
    },
    {
        name: "end",
        image: "images/resized-pictures/main.jpg",
        text: "LOPPU",
        buttonText: ["TAKAISIN", "LOPETA"],
        creditText: "LTapsaH, Pixabay"
    }
];

const qa_scenes = [
    {
        name: "a",
        image: "",
        text: "",
        question: "",
        answer: ""
    }
];

export { scenes };
export { qa_scenes };