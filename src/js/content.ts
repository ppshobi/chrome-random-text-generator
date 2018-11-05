import Random from './Random';
import * as $ from 'jquery';

let r = new Random();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let length = NaN;
    
    while(! length ) {
        let result = prompt("Enter the required text length");
        if(result === null){
            return;
        }
        
        length = Number(result);

        if(isNaN(length)) {
            alert("Dude!! Enter a number");
        }
    }

    let text= r.getLorem(length);
    let lastFocused = document.activeElement;
    
    if(lastFocused != null 
        && ($(lastFocused).is('input') || $(lastFocused).is('textarea'))
        && ! ($(lastFocused).is('input:radio') || $(lastFocused).is('input:radio'))
    ) {
        let copyFrom = document.createElement("textarea");
        copyFrom.textContent = text;
        document.body.appendChild(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        copyFrom.blur();
        document.body.removeChild(copyFrom);
        $(lastFocused).focus();
        document.execCommand('paste');
        sendResponse({ data: 'Copy Successfull' });
       
        return;
    }
    else {
        alert('Select any Input element first');
    }
});