import Random from './Random';
import * as $ from 'jquery';

let r = new Random();
console.log("content script loaded");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var length = prompt("Enter the required text length");
    var text= r.getLorem(length);
    var lastFocused;
    $("input[type='text']").focus(function () {
        lastFocused = document.activeElement;
    });

    var input = lastFocused;
    console.log(input);
    if (input == undefined) { return; }
    var scrollPos = input.scrollTop;
    var pos = 0;
    pos = input.selectionStart


    var front = (input.value).substring(0, pos);
    var back = (input.value).substring(pos, input.value.length);
    input.value = front + text + back;
    pos = pos + text.length;

    input.selectionStart = pos;
    input.selectionEnd = pos;
    input.focus();

    input.scrollTop = scrollPos;
    sendResponse({ data: 'responded' });
});


function insertText(text) {
  
}