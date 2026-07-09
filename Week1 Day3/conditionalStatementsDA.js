/* Conditional Statements */
/* Ifelse inside the Function */

function launchBrowser(browserName) {
    
    if (browserName=="Chrome") {
        console.log("Run the Chrome Browser");
        
    } else {
        console.log("Run the any other Browser");
        
    }
}
launchBrowser("chrome")

/* Switch Case inside the Function */

function runTests(testRun) {
    
    switch (testRun) {
        case "smoke":
            console.log("Run the Smoke Test");
            break;

        case "sanity":
            console.log("Run the Sanity Test");
            break;

        case "Regression":
            console.log("Run the Regression Test");
            break;   

        default:
            console.log("Run the Smoke Test");
            break;
    }
}
runTests("Regression")