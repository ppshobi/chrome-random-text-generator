import * as $ from "jquery";
import Random  from "./Random";


class Options {
    private r;

    constructor(){
        this.r = new Random();
        this.bindLocales();
        this.bindSaveListener();
    }

    bindLocales(){
        let locales = this.r.getSupportedLocales()
        for (var key in locales) {
            $('<option/>').val(locales[key]).html(key).appendTo('#language');
        }
    }
    bindSaveListener(){
        var self = this;
        $('#save-locale').click(function(){
            var obj = {locale: $("#language").val()};
            chrome.storage.sync.set(obj, function() {
                alert('Saved Language Preference');
                self.r.setLocale();
            });
        });
    }
}

new Options();