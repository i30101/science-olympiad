let problemText = document.getElementById("problem");
let answerText = document.getElementById("answer");

class Tools {
    genRand() {return Math.floor(Math.random() * 10000) / 100; }
    updateProblem(problem) {problemText.innerHTML = problem; }
    updateAnswer(answer) {answerText.innerHTML = answer; }
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

    randUnit() {return this.unitList[Math.floor(Math.random() * this.unitList.length)]; }

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
    tools.updateAnswer(" ");
}

function showAnswer() {
    tools.updateAnswer(`There are ${metric.convert(randValue, inUnit, outUnit)} ${outUnit}.`);
}



class SportsField {
    constructor() {
        this.name, this.width, this.length;
        this.names = [
            "NBA basketball field", "Olympic swimming pool", 
            "field hockey field", "lacross field", 
            "American footbal field", "baseball field", 
            "ultimate frisbee field", "badminton court", 
            "tennis singles court", "tennis doubles court"
        ];
        this.lengths = [15.2, 25, 55, 55, 48.75, 21, 37, 6.1, 8.23, 10.97];
        this.widths = [28.7, 50, 91.4, 100, 110, 21, 110, 13.4, 23.77, 23.77];
    }

    randField() {
        return Math.floor(Math.random() * this.names.length);
    }

    pickField() {
        this.name = names[this.randField()];
        this.lenghts = names[this.randField()];
        this.widths = names[this.randField()];
    }
}

