let browserName="chrome"
function launchBrowser(browserName)
{
    if(browserName==="chrome")
    {
        console.log("chrome")
    }
    else
    {
        console.log("edge") 
    }
} launchBrowser(browserName)
let testing="sanity"
function runTeststesting()
{
    switch(testing)
    {
        case "smoke":
        console.log("Smoke Testing")
        break;
        case "sanity":
        console.log("Sanity Testing")
        break;
        case "regression":
        console.log("Regression Testing")
        break;
        default:
        console.log("Smoke Testing")
        break;
    }
}runTeststesting()