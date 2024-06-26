
// IMAGES
const mainImagePath = "images/main.jpg";
const instructionImagePath = "images/bear-instruction.jpg";
const bearEnd = "images/bear-end.jpg";
const wolfImagePath = "images/wolf.jpg";
const foxImagePath = "images/fox.jpg";
const bearImagePath = "images/bear.jpg";
const roedeerImagePath = "images/roedeer.jpg";
const mooseImagePath = "images/moose.jpg";
const beaverImagePath = "images/beaver.jpg";
const bearMotiveImagePath = "images/bear-motive.jpg";

// BACKGROUNDS
const lawnBGF = "images/lawn1.jpg";
const lawnBGS = "images/lawn2.jpg";
const lawnBGT = "images/lawn3.jpg";

const wolfBG = "images/wolfbg.jpg";
const foxBG = "images/foxbg.jpg";
const bearBG = "images/bearbg.jpg";
const roedeerBG = "images/roedeerbg.jpg"
const mooseBGF = "images/moosebg.jpg";
const mooseBGS = "images/moosebg2.jpg";
const beaverBG = "images/beaverbg.jpg";

// AUTHOR CREDITS
const mainBearCredit = "LTapsaH, Pixabay";
const wolfCredit = "christels, Pixabay";
const foxCredit = "azazelok, Pixabay";
const bearCredit = "Bergadder, Pixabay";
const roedeerCredit = "Luboshouska, Pixabay";
const mooseCredit = "12019, Pixabay";
const beaverCredit = "SteveRaubenstine, Pixabay";

const scenes = [
    {
        name: "main",
        image: "./" + mainImagePath,
        bgImage: "./" + lawnBGF,
        text: "Suomen Eläimet",
        buttonText: ["", "ALOITA"],
        creditText: mainBearCredit
    },
    {
        name: "ohjeet",
        image: "./" + instructionImagePath,
        bgImage: "./" + lawnBGF,
        text: "OHJEET \n Lue faktoja kaikenlaisista eläimistä ja siirry eteenpäin tai taaksepäin napeilla! \n Ole myös valmiina vastaamaan kysymyksiin! \n Ohjeet voit nähdä aina ? painikkeella.",
        buttonText: ["TAKAISIN", "JATKA"],
        creditText: ""
    },
    {   // preview
        name:"Susi-pre",
        image: "./" + wolfImagePath,
        bgImage: "./" + wolfBG,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: wolfCredit
    },
    {
        name: "Susi",
        image: "./" + wolfImagePath,
        bgImage: "./" + wolfBG,
        text: "SUSI \n Tiesitkö, että susi on yöeläin? Tämä tarkoittaa että ne liikkuvat pääosin öisin ja hämärällä. Sudet myös saalistavat usein yöllä. \n Vuonna 2021 Suomessa oli noin 250-350 sutta!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: wolfCredit
    },
    {   // preview
        name: "Kettu-pre",
        image: "./" + foxImagePath,
        bgImage: "./" + foxBG,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: foxCredit
    },
    {
        name: "Kettu",
        image: "./" + foxImagePath,
        bgImage: "./" + foxBG,
        text: "KETTU \n Noin 10% Suomen ketuista on 'hopeakettuja', niiden turkin väri vaihtelee hopeanvärisestä lähes mustaan.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: foxCredit
    },
    {   // preview
        name: "Karhu-pre",
        image: "./" + bearImagePath,
        bgImage: "./" + bearBG,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: bearCredit
    },
    {
        name: "Karhu",
        image: "./" + bearImagePath,
        bgImage: "./" + bearBG,
        text: "KARHU \n Tiesitkö, että karhu ei ole ainoastaan Suomen suurin petoeläin, vaan koko Euroopan! \n Karhujen näköaisti on huono, mutta niiden hajuaisti on hyvin kehittynyt.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: bearCredit
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: "./" + roedeerImagePath,
        bgImage: "./" + roedeerBG,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: roedeerCredit
    },
    {
        name: "Metsäkauris",
        image: "./" + roedeerImagePath,
        bgImage: "./" + roedeerBG,
        text: "METSÄKAURIS \n Metsäkauriit ovat taitavia uimareita! Niitä esiintyy eniten Etelä- ja Lounais-Suomessa. \n Metsäkauriit syövät marjoja, oksia, sieniä ja muita sellaisia.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: roedeerCredit
    },
    {   // preview
        name: "Hirvi-pre",
        image: "./" + mooseImagePath,
        bgImage: "./" + mooseBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: mooseCredit
    },
    {
        name: "Hirvi",
        image: "./" + mooseImagePath,
        bgImage: "./" + mooseBGF,
        text: "HIRVI \n Aikuinen hirvi voi painaa huimat 800 kilogrammaa, se on jopa noin kolme moottoripyörää! Yleensä ne kuitenkin painavat lähemmäksi 500 kilogrammaa. \n Hirvet myös aiheuttavat paljon metsävahinkoja ja niiden korvaus maksaa paljon.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: mooseCredit
    },
    {   // preview
        name: "Majava-pre",
        image: "./" + beaverImagePath,
        bgImage: "./" + beaverBG,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: beaverCredit
    },
    {
        name: "Majava",
        image: "./" + beaverImagePath,
        bgImage: "./" + beaverBG,
        text: "MAJAVA \n Tiesitkö, että majavat voivat elää jopa yli 20 vuotiaiksi? Majava on myös Suomen suurin jyrsijä!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: beaverCredit
    },
    {   // Continue to questions screen
        name: "end",
        image: "./" + instructionImagePath,
        bgImage: "./" + lawnBGF,
        text: "Hyvä! Luit kaikki faktat! Haluatko mennä kysymyksiin?",
        buttonText: ["PALAA", ""],
        creditText: ""
    }
];

const qaQuestions = [
    {
        name: "wolfQuestion",
        image: "./" + wolfImagePath,
        question: "Milloin sudet saalistavat useimmiten? \n 1. Yöllä \n 2. Päivällä \n 3. Aamulla \n 4. Sudet eivät saalista",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 0,   // option(1/2/3/4) - 1 = correctAnswerIndex
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: wolfCredit,
    },
    {
        name: "foxQuestion",
        image: "./" + foxImagePath,
        question: "Kuinka suuri määrä Suomen ketuista on hopeakettuja? \n 1. 1% \n 2. 5% \n 3. 10% \n 4. 20%",
        options: ["1", "2", "3", "4"],  
        correctAnswerIndex: 2,
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: foxCredit
    },
    {
        name: "bearQuestion",
        image: "./" + bearImagePath,
        question: "Mikä on karhun aisteista huonoin? \n 1. Hajuaisti \n 2. Näköaisti \n 3. Kuuloaisti \n 4. Kaikki edellä mainitut",
        options: ["1", "2", "3", "4"], 
        correctAnswerIndex: 1,
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: bearCredit
    },
    {
        name: "roedeerQuestion",
        image: "./" + roedeerImagePath,
        question: "Missä metsäkauriit ovat taitavia? \n 1. Kiipeilyssä \n 2. Piiloutumisessa \n 3. Kalojen nappaamisessa \n 4. Uimisessa",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: roedeerCredit
    },
    {
        name: "mooseQuestion",
        image: "./" + mooseImagePath,
        question: "Mikä on hirvien keskimääräinen paino? \n 1. Noin 100kg \n 2. Noin 500kg \n 3. Noin 200kg \n 4. Noin 1000kg",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 1,
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: mooseCredit
    },
    {
        name: "beaverQuestion",
        image: "./" + beaverImagePath,
        question: "Kuinka vanhoiksi majavat voivat elää? \n 1. Noin 10 vuotiaiksi \n 2. Noin 5 vuotiaiksi \n 3. Noin 15 vuotiaiksi \n 4. Noin 20 vuotiaiksi",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: beaverCredit
    },
    {
        name: "questionEnd",
        image: "./" + bearEnd,
        question: "Olet päässyt pelin loppuun! Hyvin tehty!",
        buttonText: ["PALAA", ""],
        creditText: "",
    },
];

export { scenes };
export { qaQuestions };