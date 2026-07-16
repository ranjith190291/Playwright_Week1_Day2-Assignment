//Home Assignment => Callback

let browser = "Chrome"

function checkBrowserVersion(Callback) {

    setTimeout(function() {

        Callback(browser) //It will pass the browser version to Callback function
        
    }, 2000);
    
}

function printBrowserVersion(version) {
    
    console.log("Broswer version using Callback: " +version); // It will print the browser version after 2second delay
    
}

checkBrowserVersion(printBrowserVersion) // O/P: Broswer version using Callback: Chrome