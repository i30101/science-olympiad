let problems = document.getElementById("problems");
let buttonContainer = document.getElementById("button-container");

let test1 = [
    ["Aristocrat",   150,    "Decrypt this aristocrat talking about one of the best times to enjoy some music.",                                     "WMADSEADW E LUK ZPWS WES MPSWEGD MR SFD VPEIGEKB UKG NDIUT EK SFD IUJK. SFDND UND WM AUKH SFEKBW SM GM EK KUSPND."],
    ["Vigenere",     250,    "Decode this quote that was encoded with the key CENTAUR.",                                                             "UXNK SNRT WUBNCEI FEBGBK KR GAE YOREALE IW VLR GIAYV AUTT NVNIFVOJV QV ATKYU GCR VOOCF WRX TBP DVVZHN MCVVXTS"],
    ["Pollux",       200,    "Decode this quote; you are given that 0=●, 1=×, 2=–, 5=●, 7=×, 9=×.",                                                  "4   0   6   4   9   4   3   8   9   1   6   6   3   9   6   6   2   7   9   8   5   4   5   7   3   2   9   0   2   0   3   1   0   6   3   4   7   2   8   8   1   8   8   6   1   6   5   7   5   4   5   1   9   3   8   3   1   8   8   6   9   8   3   4   1   4   1   7   5   6   8   6   7   0   7   8   9   9   4   5   5   1   2   1   3   2   3   1   3   7   4   8   7   6   2   1   3   0   5   1   1   8   9   6   6   2   1   7   8   5   2   3   7   2   8   2   1   2   0   9   6   0   5   1   3   0   8   7   6   4   8   5   9   8   9   7   5   6   3   3   1   2   2   6   7   6   4   7   6   6   3   7   1   4   6   0   1   5   6   1   2   4   7   6   8   5   9   3   9   2   4   4   7   9   0   8   9   8   1   2   9   5   2   9   6   3   6   0   9   8   5   8   9   5   4   5"],
    ["Baconian",     175,    "Decode this phrase that was encoded using the Baconian cipher.",                                                       "D I L A Y L P D A Y I L A P D Y I P L D I A P D I P Y L D I P D A Y I P D I P D I L A P D I P D Y L I P A Y D I P D I P L D I A P D I Y L A P D Y I P L D I P D I A P D I P Y L D I P D A Y I P L D I P D A Y I P L D I A P D I Y L A P D Y I P L D A I P D Y L I A P Y L D A I P D Y L A I P D Y"],
    ["Aristocrat",   200,    "Some more interesting advice from a person who thinks they’re too cool to use small words. Decrypt this aristocrat.",  "XUPNR YSOQXNUJHMNFH RUJXQNJ FUXSJXNQO XU JSVQXNBSOC NIFQRX HUKYRSH UZ HKFFUYX. VYQWKQO WNHXQJRNJV NH RYNXNRQO."],
    ["Morbit",       225,    "A quote has been encoded using the Morbit Cipher for you to decode. You are told that 1=–×, 2=●–, 3=●×, 4=–●.",        "5   3   8   1   7   8   3   3   2   3   5   3   5   1   2   7   5   7   3   5   2   7   9   5   7   5   9   1   5   5   7   9   2   4   6   8   7   8   7   7   4   9   8   1   5   4   9   1   5   5   7   9   5   6   3   5   3   1   5   6   7   2   6   7   3   8   1   4   7   5   9   2   1   3   7   5   3   2   7   5   1   3   6   2   3   2   3   3   2   6   7   6   5   9   1   5   5   7   1   1   6   7   5   3   3   4   8   9   5   3   5   5   7   1   2   4   7   9   4   6   8   6   9   8   1   4   7   4   3   4   8   9   8   1   5   1   2   3   7   8   3   2   3   3   5   4   7   7   4   7   6   3   4   4   7   7   5   9   4   5   7   2   6   9   2   6   2   3   1   5   1   2   7   4   3   2   5   6   2   1   6   8   7   2   7   4   9   5   3   3   4   7   5   7   9   8   1   5   4   9   2   4   6   8   7   5   7   5   7   3   4   5   7   3   2   5   7   3   1   5   7   7   5"],
    ["Caesar",       100,    "Decode this quote that was encoded using the Caesar cipher.",                                                           "SVNRIV FW KIZTBJKVIJ. KYVP DRP JLUUVECP TYREXV REU EFK WFCCFN REP IVXLCRI JVKKZEX."],
    ["Morbit",       300,    "Decode this quote that was encoded using the Morbit cipher. You are given that 1=–●, 2=●●, 3=–×, 4=●–, 5=×●, 6=××.",   "1   2   5   1   8   2   3   8   5   4   8   4   2   5   3   7   5   5   2   6   4   2   5   8   3   8   4   8   4   5   1   8   4   2   9   4   3   9   3   4   9   4   5   6   1   9   7   6   4   2   9   7   9   1   5   8   1   1   5   3   4   2   6   2   8   8   1   5   2   5"],
    ["Hill",         175,    "Encode this quote with a Hill cipher with the keyword \"ONLY\".",                                                      "WHO SO EVER IS DELIGHTED IN SOLITUDE IS EITHER A WILD BEAST OR A GOD."],
    ["Caesar",       75,     "Encode this quote using the Caesar cipher with a shift of 1776.",                                                       "THE UNITED STATES CAPITOL BUILDING WAS EXPANDED BECAUSE THERE WERE TOO MANY STATES."],
    ["Affine",       200,    "Decode this quote that was encoded using the Affine Cipher. The key used was (A,B) = (9,12).",                         "GB SIKZNS JWMHHU RMGZFKH BI XMTW BI SRGZ QMZU BGQWS WTWJU SWEIZN CGBX UIKJ XWMN RJWSSWN MOMGZSB BXW EWGHGZO."],
    ["Baconian",     275,    "Decode this quote that was encoded using the Baconian Cipher. It ends with the string HEIR",                           "CROWS GLASS IT HAD RAPID TENDS MARIE DELTA WIDER BULLS GRACE I WANT JUICY ROBIN RANDY BRACE SNAPS MAINE ADMIT WATCH LORDS SHELL COBRA SCARS FLOWN HAVEN TRASH SAGE FILMS STEVE I TELL BRITT TEAMS MILES IT WHO DOLLY CLOCK PATTY"],
    ["Aristocrat",   200,    "Solve this aristocrat that may contain spelling errors.",                                                              "SLT QK IXXIUX’G GKY EUSETG QPGEIXXJ PM ALX QJPXJ? XTX EH QKSM AK HT UEGA IXEJ."],
    ["Hill",         175,    "The following quote needs to be decoded with the Porta Cipher with a keyword of CAR.",                                 "INQFVFU VK BNQMSMZ. SGDTZFGQMT QE CVWANGY. WGG FAG SMBBWAO IUQQU LA QG WF LVR BAEKF XQMQ GT FMTSZDVFU."],
    ["Pollux",       125,    "A quote has been encoded using the Pollux Cipher for you to decode. You are told that 1=●, 7=×, 8=×, 9=×",             "2   1   2   2   9   5   5   6   0   1   6   4   7   0   6   8   1   9   2   5   1   7   1   6   2   8   2   2   7   5   1   1   1   0   2   4   1   1   8   6   2   6   5   0   9   4   2   2   8   6   6   4   8   2   6   6   0   5   2   9   1   5   1   9   1   2   7   6   4   2   0   1   2   2   1   0   5   7   9   4   5   9   1   1   5   0   1   2   2   7   6   8   8   4   2   1   1   0   1   7   7   4   0   1   1   1   2   0   2   0   0   1   1   4   0   4   0   6   0   1   9   1   4   2   9   1   6   0   5   1   9   6   1   5   2   7   2   7   2   2   2   8   8   6   6   4   9   2   2   4   1   8   8   1   2   1   7   6   7   5   4   6   8   1   4   2   8   6   5   7   2   2   1   8   0   1   5   0   5   2   0   6   1   2   0   7   2   8   1   4   9   1   6   2   7   5   0   2   1   1   2   0   5   5   1   6   7   2   2   5   7   2   4   7   4   2   5   0   1   0   2   2   2   7   7   4   0   5   4   5   7   9   6   8   1   1   1   2   8   5   6   6   9   1   2   1   8   2   0   8   1   5   9   6   1   5   2   9   6   1   5   1   9   2   1   5   7   2   2   1   8   6   8   5   5   6   0   4   6   9   1   9   6   1   2   7   7   4   9   6   6   4   7   7   5   9   1   2   2   2   7   1   0   8   2   1   1   0   5   5   6   8   2   2   6   2   8   5   8   0   2   1   1   1   7   4   2   4   4   8   1   6   6   1   7   6   4   6   9   5   1   5   1   7   1   5   1   8   1   1   9   2   1   1   8   2   1   9   2   8   1   1   2   8   8   4   5   4   8   1   1   5   1   8   8   1   1   2   9   6   4   6   9   6   2   6   1   0   1   2   8   2   8   5   0   6   1   4   5."],
    ["Vigenere",     175,    "Decode this quote that was encoded using the vigenere cipher. The last word is TRAILS.",                               "WTOE LBISJRL TZY SVJDL AFX VBEPVIWHTI ISI GJYRX DFXDGIIW DYPY GH DEGVID LLRMAD"],
    ["Affine",       150,    "Decode this quote that was encoded using the Affine Cipher where P decodes to J, and X decodes to F.",                 "U WMLVMB URULUHQTM EK PGKV VTM QSWFEHUVESH SX U VKGHUWE UHB U XLSSB. HSV UI ZMUV VEWM."],
    ["Porta",        300,    "The following quote by Heraclitus needs to be decoded with the Porta Cipher with a keyword of THINK.",                 "XUTT CJUZ ANJC KBIX UPOW MQSR WKXV AMLD YIXK UJXA YQLX AXUZ HYTK KDI"],
    ["Aristocrat",   125,    "Solve this aristocrat about birds.",                                                                                   "DHBDE CDRBCYDIRBKE BC DE BAUKQRDER AORQBI KY RVO CSIIOCC KY RVBC RKSQEDAOER."],
    ["Rail",         300,    "A quote has been encoded using the Rail Fence Cipher. 3 rails were used.",                                             "N O N C T O U G F D E O M E C A E O Y U A D N E I H E R O C N E O F Y A C F O R ’ F N D N I G L N W C A W M Y A T M N L I I A N O"]
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
            let type = problem[0];
            let points = problem[1];
            let question = problem[2]
            let text = problem[3];
            problems.innerHTML += `
            <div class=\"container problem\" id=\"problems\">
                <div class=\"question bold-text\">
                    ${i + 1}. ${type} (${points} points) <br> ${question}
                </div>
                <div class=\"question-text\">${text}</div>
            </div>`
            notStarted = false;
            buttonContainer.innerHTML = "";
        }
    }
}