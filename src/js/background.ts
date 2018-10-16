console.log("bg loaded");

chrome.commands.onCommand.addListener(function(command) {
    console.log(command);
    if(command == 'insert-fake'){
        console.log("command triggered");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            var tabid = tabs[0].id ? tabs[0].id : 0;
            chrome.tabs.sendMessage(tabid, {action: "open_dialog_box"}, function(response) {
                console.log(response);
            });  
        });
    }
});