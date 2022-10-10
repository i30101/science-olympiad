let problemText = document.getElementById("problem");
let problemAnswer = document.getElementById("answer");

let randValue, inUnit, outUnit;

let conversions = {
    femtometers : -15,
    picometers : -12,
    nanometers : -9,
    micrometers : -6,
    millimeters : -3,
    centimeters : -2,
    decimeters : -1,
    meters : 0,
    decameters : 1,
    hectometers : 2,
    kilometers : 3,
    megameters : 6,
    gigameters : 9,
    terameters : 12,
    petameters : 15,
    exameters : 18,
    zettameters : 21,
}

let keys = Object.keys(conversions);

function randUnit() {
    return keys[Math.floor(Math.random() * keys.length)];
}

function convert(value, inUnit, outUnit) {
    let inFactor = Math.pow(10, conversions[inUnit]);
    let outFactor = Math.pow(10, - conversions[outUnit]);
    console.log(inFactor, outFactor);
    return Math.round((value * inFactor * outFactor) * 100) / 100;
}

function newProblem() {
    randValue = Math.round((Math.random() * 10) * 100) / 100;
    inUnit = randUnit();
    outUnit = randUnit();
    problemText.innerHTML = `How many ${outUnit} are in ${randValue} ${inUnit}?`;
}

function showAnswer() {
    problemAnswer.innerHTML = `There are ${convert(randValue, inUnit, outUnit)} ${outUnit} in ${randValue} ${inUnit}.`;
}