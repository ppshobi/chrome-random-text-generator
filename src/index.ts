import Random from './js/Random';


let r = new Random();

chrome.storage.sync.get(['locale'], function(data) {
    console.log(data);
});

r.setLocale();
alert(r.getName() + "  " + r.getLocale())


class Listeners { 

}

new Listeners();