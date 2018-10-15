import * as faker from 'faker';

export default class Random {
    private faker = faker;
    constructor(){
        this.faker = faker
    }

    getParagraph(){
        return this.faker.lorem.paragraph
    }
}
