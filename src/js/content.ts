console.log("content script loaded");
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    sendResponse({data:'responded'});
});