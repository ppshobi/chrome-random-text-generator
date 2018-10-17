import Random from './Random';
import * as $ from 'jquery';

let r = new Random();
console.log("content script loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let length = NaN;
    
    while(! length ) {
        length = Number(prompt("Enter the required text length"))
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