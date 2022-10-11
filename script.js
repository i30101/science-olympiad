let problemText = document.getElementById("problem");
let answerText = document.getElementById("answer");

class Tools {
    genRand() {
        return Math.floor(Math.random() * 10000) / 100;
    }

    updateProblem(problem) {
        problemText.innerHTML = problem;
    }

    updateAnswer(answer) {
        answerText.innerHTML = answer;
    }
}

let tools = new Tools();

let randValue, inUnit, outUnit;

class Metric {
    constructor() {
        this.units = {
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
        this.unitList = Object.keys(this.units);
    }

    randUnit() {
        return this.unitList[Math.floor(Math.random() * this.unitList.length)];
    }

    convert(value, inUnit, outUnit) {
        let inFactor = Math.pow(10, this.units[inUnit]);
        let outFactor = Math.pow(10, - this.units[outUnit]);
        console.log(inUnit, inFactor, outUnit, outFactor);
        return value * inFactor * outFactor;
    }
}

let metric = new Metric();

function newProblem() {
    randValue = tools.genRand();
    inUnit = metric.randUnit();
    outUnit = metric.randUnit();
    tools.updateProblem(`How many ${outUnit} are in ${randValue} ${inUnit}?`);
}

function showAnswer() {
    tools.updateAnswer(`There are ${metric.convert(randValue, inUnit, outUnit)} ${outUnit}.`);
}



// let sportsFields = [];
// class SportsField {
//     constructor(name, length, width) {
//         this.name = name;
//         this.length = length;
//         this.width = width;
//         sportsFields.push(this);
//     }
// }
// new SportsField("NBA basketball field", 28.7, 15.2);
// new SportsField("Olympic swimming pool", 50, 25);
// new SportsField("field hockey field", 91.4, 55);
// new SportsField("lacrosse field", 100, 55);
// new SportsField("American football field", 110, 48.75);
// new SportsField("baseball field", 21, 21);
// new SportsField("ultimate frisbee field", 110, 37);
// new SportsField("badminton court", 13.4, 6.1);
// new SportsField("tennis singles court", 23.77, 8.23);
// new SportsField("tennis doubles court", 23.77, 10.97);
























