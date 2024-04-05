const scenes = [
    {
        name: "main",
        image: "Materials/resized-pictures/main.jpg",
        text: "Suomen Eläimet",
        buttonText: ["", "ALOITA"]
    },
    {
        name: "ohjeet",
        image: "Materials/resized-pictures/main.jpg",
        text: "OHJEET \n Paina 'seuraava' ja 'edellinen' nappeja vaihtaaksesi ruutuja!",
        buttonText: ["TAKAISIN", "JATKA"]
    },
    {   // preview
        name:"Susi-pre",
        image: "Materials/resized-pictures/wolf.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Susi",
        image: "Materials/resized-pictures/wolf.jpg",
        text: "SUSI \n Tiesitkö, että susi on yöeläin? Tämä tarkoittaa että ne liikkuvat pääosin öisin ja hämärällä. Sudet myös saalistavat usein yöllä.",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Kettu-pre",
        image: "Materials/resized-pictures/fox.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Kettu",
        image: "Materials/resized-pictures/fox.jpg",
        text: "KETTU \n Noin 10% Suomen ketuista on 'hopeakettuja', niiden turkin väri vaihtelee hopeanvärisestä lähes mustaan.",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Karhu-pre",
        image: "Materials/resized-pictures/bear.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Karhu",
        image: "Materials/resized-pictures/bear.jpg",
        text: "KARHU \n Tiesitkö, että karhu ei ole ainoastaan Suomen suurin petoeläin, vaan koko Euroopan!",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: "Materials/resized-pictures/roedeer.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Metsäkauris",
        image: "Materials/resized-pictures/roedeer.jpg",
        text: "METSÄKAURIS \n Metsäkauriit ovat taitavia uimareita!",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Hirvi-pre",
        image: "Materials/resized-pictures/moose.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Hirvi",
        image: "Materials/resized-pictures/moose.jpg",
        text: "HIRVI \n Aikuinen hirvi voi painaa jopa huimat 800 kilogrammaa! Se on noin kolme moottoripyörää!",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {   // preview
        name: "Majava-pre",
        image: "Materials/resized-pictures/beaver.jpg",
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "Majava",
        image: "Materials/resized-pictures/beaver.jpg",
        text: "MAJAVA \n Tiesitkö, että majavat voivat elää jopa yli 20 vuotiaiksi?",
        buttonText: ["TAKAISIN", "SEURAAVA"]
    },
    {
        name: "end",
        image: "Materials/resized-pictures/main.jpg",
        text: "LOPPU",
        buttonText: ["TAKAISIN", "LOPETA"]
    }
];

export { scenes };