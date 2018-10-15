import Random from './js/Random';

let r = new Random();

console.log(r.getParagraph())


class Listeners {
    constructor() {
        this.bindOptions();
    }  

    bindOptions() {
        $('#go-to-options').click(function(e){
            if (chrome.runtime.openOptionsPage) {
                chrome.runtime.openOptionsPage();            
            }
        });
    }
}

new Listeners();