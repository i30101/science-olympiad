let problems = document.getElementById("problems");
let buttonContainer = document.getElementById("button-container");

test1 = [
    "How many college students in the United States have blue eyes?",
    "Of the students in the previous question, how many will major in science or engineering?",
    "How many feathers are removed from turkeys for one year’s Thanksgiving in the United States?",
    "Using just the letters in the alphabet, how many unique 26-letter sequences are possible?",
    "How many nucleons flow down the drain during an average shower?",
    "In nanoseconds, how long would it take light to travel the length of all the roads paved and unpaved, in the United States?",
    "How many acres of land in Texas, California, Alaska and Rhode Island combined?",
    "How many chlorine atoms in a properly chlorinated Olympic-size swimming pool?",
    "How many passenger cars are there in the world?",
    "If in the interest of security, an observation tower were built every two thousand feet along the shores and borders of the continental United States, how many towers would be necessary?",
    "How fast in miles per hour would you need to be moving so that a red light you are approaching appears green?",
    "How many robins are there in North America?",
    "How many golf balls could be in a single layer in the country of Croatia?",
    "What is the mass in kilograms of the number of electrons necessary to provide an average US residence with electrical power for a day?",
    "How many 8-cut pizzas would it take to provide two slices to every 2016-2017 New York State Science Olympiad competitor?",
    "How many deuterium atoms can be expected to be encountered in a cubic mile of seawater?",
    "If the New York State Thruway, including the shoulders of the road, were paved with yellow bricks, how many would be necessary?",
    "How many electrons are on the negative plate of a 17 μF capacitor charged to 480 V?",
    "How many people in West Virginia are aged 65 and older?",
    "How many movie tickets are sold in a year in the United States?",
    "What is the mass in grams of the Empire State Building?",
    "How many square feet is the country of Argentina?",
    "How many bushels of apples does New York State harvest annually?",
    "How many oxygen molecules (O2) does the average human inhale in their lifetime?",
    "What would it cost in dollars to buy enough diesel fuel to transport the entire population of New York State to Miami Beach via coach bus?",
    "What is the mass in grams of a Nimitz-class US aircraft carrier?",
    "How many sugar cubes would you need to stack to build a tetrahedron 100’ high?",
    "How many Escherichia coli bacteria, arranged end to end, would you need to reach across upstate NewYork?",
    "What is the value in dollars of a $1,500 investment in 85 years at an annual return of 3.5%?",
    "How many cubic meters would the cargo hold of Santa’s sleigh have to be to carry a twelve-inch action figure for every girl and boy in the world?",
    "How many trees in the Adirondack Park?",
    "How many pieces of popcorn would it take to make a garland that wraps around the Rockefeller Center Christmas tree once every foot?",
    "How many inches of pencil would it take to draw a line around the equator of the Earth?",
    "How many visible light photons per second would you have to reflect off a solar sail to accelerate a school bus at one g?",
    "How many dump truck loads of dirt would it take to fill in the Grand Canyon?",
    "How many AA Batteries would it take to provide the electrical power to a town of 100,000 for a day?",
    "How many electrons in a mole of neutral water?",
    "How many rotations does the axle of a car make during a 2-mile commute?",   
];

let notStarted = true;
function start(action) {
    if(action == 0) {
        problems.innerHTML = `<div class=\"bold-text\">You cannot start this test yet. Contact your test proctors for help.</div>`;
    }else if(action == 1) {
        showTest(test1);
    }else {
        problems.innerHTML = `<div class=\"bold-text\">System error. Contact your test proctors for help.</div>`;
    }
}

function showTest(test) {
    if(notStarted) {
        for(let i = 0; i < test.length; i++) {
            problems.innerHTML += `
            <div class=\"container problem\" id=\"problems\">
                <div class=\"question bold-text\">${i + 1}. (5.00 points)</div>
                <div class=\"question-text\">${test[i]}</div>
            </div>`
            notStarted = false;
            buttonContainer.innerHTML = "";
        }
    }
}
