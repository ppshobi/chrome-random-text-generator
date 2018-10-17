chrome.commands.onCommand.addListener(function(command) {
    console.log(command);
    if(command == 'insert-fake'){
        console.log("command triggered");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id !, {}, function(response) {
                console.log(response);
            });  
        });
    }
});