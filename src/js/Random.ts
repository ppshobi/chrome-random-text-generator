import * as faker from 'faker';

export default class Random {
    private static faker;

    constructor() {
        Random.faker = faker
    }

    getSupportedLocales() {
        return {
            az : 'az',
            cz : 'cz',
            de : 'de',
            de_AT : 'de_AT',
            de_CH : 'de_CH',
            en : 'en',
            en_AU : 'en_AU',
            en_BORK : 'en_BORK',
            en_CA : 'en_CA',
            en_GB : 'en_GB',
            en_IE : 'en_IE',
            en_IND : 'en_IND',
            en_US : 'en_US',
            en_ZA : 'en_ZA',
            en_au_ocker : 'en_au_ocker',
            es : 'es',
            es_MX : 'es_MX',
            fa : 'fa',
            fr : 'fr',
            fr_CA : 'fr_CA',
            ge : 'ge',
            id_ID : 'id_ID',
            it : 'it',
            ja : 'ja',
            ko : 'ko',
            nb_NO : 'nb_NO',
            nep : 'nep',
            nl : 'nl',
            pl : 'pl',
            pt_BR : 'pt_BR',
            pt_PT : 'pt_PT',
            ru : 'ru',
            sk : 'sk',
            sv : 'sv',
            tr : 'tr',
            uk : 'uk',
            vi : 'vi',
            zh_CN : 'zh_CN',
            zh_TW : 'zh_TW',
        }
    }

    setLocale() {
        chrome.storage.sync.get(['locale'], function(data) {
            Random.faker.locale = data.locale;   
        });
    }
    getLocale() {
        return Random.faker.locale;
    }
        
    getParagraph () {
        return Random.faker.lorem.paragraph();
    }

    getName () {
        return Random.faker.name.findName();
    }
}
