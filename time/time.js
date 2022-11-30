let problems = document.getElementById("problems");
let buttonContainer = document.getElementById("button-container");

let test1 = [
    [1,"The atomic clock invented after the quartz clock."],
    [1,"What is the earliest known timekeeping device?"],
    [1,"How many seconds are in a 365-day (non-leap) year?"],
    [4,"What day of the week was 1 January 2000?"],
    [2,"What are these states that do not observe daylight savings time?"],
    [3,"Calculate the frequency in Hz and energy in J of a photon with wavelength 4.3 * 10^-8 m."],
    [2,"UTC is based on Earth's rotation relative to distant celestial objects."],
    [1,"Atomic clocks are radioactive"],
    [1,"How many US states do not observe daylight savings time?"],
    [2,"How often does a leap year occur?"],
    [4,"The second is the duration of ___ periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the ___ atom."],
    [4,"What is the significnace of the International Date Line, and how do you interpret your time/day across this location?"],
    [2,"Earth has a constant orbital velocity. "],
    [4,"20000102 a valid ISO 8601 format date."],
    [2,"What calendar is used by the majority of the world?"],
    [2,"What is the value of quartz on Moh's hardness scale?"],
    [2,"Quartz is an excellent material for timekeeping since its vibrational frequency is not highly affected by termperature and experiences a low amount of hysteresis."],
    [2,"What is the time difference between Pacific Daylight Time and Pacific Standard Time?"],
    [2,"This effect is when voltage is generated from mechanical stress on a crystal (spelling counts)."],
    [2,"When was the last leap year?"]
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
            let problem = test[i];
            problems.innerHTML += `
            <div class=\"container problem\" id=\"problems\">
                <div class=\"question bold-text\">${i + 1}. ${problem[0]}.00 points</div>
                <div class=\"question-text\">${problem[1]}</div>
            </div>`
            notStarted = false;
            buttonContainer.innerHTML = "";
        }
    }
}