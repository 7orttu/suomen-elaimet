
const mainImagePath = "images/resized-pictures/main.jpg";
const wolfImagePath = "images/resized-pictures/wolf.jpg";
const foxImagePath = "images/resized-pictures/fox.jpg";
const bearImagePath = "images/resized-pictures/bear.jpg";
const roedeerImagePath = "images/resized-pictures/roedeer.jpg";
const mooseImagePath = "images/resized-pictures/moose.jpg";
const beaverImagePath = "images/resized-pictures/beaver.jpg";

const scenes = [
    {
        name: "main",
        image: mainImagePath,
        text: "Suomen Eläimet",
        buttonText: ["", "ALOITA"],
        creditText: "LTapsaH, Pixabay"
    },
    {
        name: "ohjeet",
        image: mainImagePath,
        text: "OHJEET \n Paina 'seuraava' ja 'edellinen' nappeja vaihtaaksesi ruutuja!",
        buttonText: ["TAKAISIN", "JATKA"],
        creditText: "LTapsaH, Pixabay"
    },
    {   // preview
        name:"Susi-pre",
        image: wolfImagePath,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "christels, Pixabay"
    },
    {
        name: "Susi",
        image: wolfImagePath,
        text: "SUSI \n Tiesitkö, että susi on yöeläin? Tämä tarkoittaa että ne liikkuvat pääosin öisin ja hämärällä. Sudet myös saalistavat usein yöllä.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "christels, Pixabay"
    },
    {   // preview
        name: "Kettu-pre",
        image: foxImagePath,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "azazelok, Pixabay"
    },
    {
        name: "Kettu",
        image: foxImagePath,
        text: "KETTU \n Noin 10% Suomen ketuista on 'hopeakettuja', niiden turkin väri vaihtelee hopeanvärisestä lähes mustaan.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "azazelok, Pixabay"
    },
    {   // preview
        name: "Karhu-pre",
        image: bearImagePath,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Bergadder, Pixabay"
    },
    {
        name: "Karhu",
        image: bearImagePath,
        text: "KARHU \n Tiesitkö, että karhu ei ole ainoastaan Suomen suurin petoeläin, vaan koko Euroopan!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Bergadder, Pixabay"
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: roedeerImagePath,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Luboshouska, Pixabay"
    },
    {
        name: "Metsäkauris",
        image: roedeerImagePath,
        text: "METSÄKAURIS \n Metsäkauriit ovat taitavia uimareita!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "Luboshouska, Pixabay"
    },
    {   // preview
        name: "Hirvi-pre",
        image: mooseImagePath,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "12019, Pixabay"
    },
    {
        name: "Hirvi",
        image: mooseImagePath,
        text: "HIRVI \n Aikuinen hirvi voi painaa jopa huimat 800 kilogrammaa! Se on noin kolme moottoripyörää!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "12019, Pixabay"
    },
    {   // preview
        name: "Majava-pre",
        image: beaverImagePath,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "SteveRaubenstine, Pixabay"
    },
    {
        name: "Majava",
        image: beaverImagePath,
        text: "MAJAVA \n Tiesitkö, että majavat voivat elää jopa yli 20 vuotiaiksi?",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: "SteveRaubenstine, Pixabay"
    },
    {
        name: "end",
        image: mainImagePath,
        text: "LOPPU",
        buttonText: ["TAKAISIN", "LOPETA"],
        creditText: "LTapsaH, Pixabay"
    }
];

const qaQuestions = [
    {
        name: "wolfQuestion",
        image: wolfImagePath,
        text: "",
        question: "",
        options: ["", ""]
    },
    {
        name: "foxQuestion",
        image: foxImagePath,
        text: "",
        question: "",
        options: ["", ""]
    },
    {
        name: "bearQuestion",
        image: bearImagePath,
        text: "",
        question: "",
        options: ["", ""]
    },
    {
        name: "roedeerQuestion",
        image: roedeerImagePath,
        text: "",
        question: "",
        options: ["", ""]
    },
    {
        name: "mooseQuestion",
        image: mooseImagePath,
        text: "",
        question: "",
        options: ["", ""]
    },
    {
        name: "beaverQuestion",
        image: beaverImagePath,
        text: "",
        question: "",
        options: ["", ""]
    }
];

export { scenes };
export { qaQuestions };