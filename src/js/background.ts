console.log("bg loaded");

chrome.commands.onCommand.addListener(function(command) {
    console.log(command);
    if(command == 'insert-fake'){
        console.log("command triggered");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id !, {action: "open_dialog_box"}, function(response) {
                console.log(response);
            });  
        });
    }
});