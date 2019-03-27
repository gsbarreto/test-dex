import { Parse } from 'parse';
import { parseAppId, parseUrlServer } from './apiURL';

export default class ContentProvider {
    constructor() {
        this.parseInitialize();
    }

    parseInitialize() {
        Parse.initialize(parseAppId);
        Parse.serverURL = parseUrlServer;
    }

    async getAllFoods() {
        var Food = new Parse.Object.extend("Food");

        var query = new Parse.Query(Food);

        var result = query.find();

        return await result.then(function (e) {
            var arrayFoods = [];
            e.forEach(element => {
                const obj = {};
                obj.name = element.get('name');
                obj.link = element.get('link');
                arrayFoods.push(obj);
            });
            return arrayFoods;
        });
    }

    async getAllPeople() {
        var People = new Parse.Object.extend("Person");

        var query = new Parse.Query(People);

        var result = query.find();

        return await result.then(function (e) {
            var arrayPeople = [];
            e.forEach(element => {
                const obj = {};
                obj.name = element.get('name');
                obj.link = element.get('link');
                arrayPeople.push(obj);
            });
            return arrayPeople;
        });
    }

    async getAllPlaces() {
        var Place = new Parse.Object.extend("Place");

        var query = new Parse.Query(Place);

        var result = query.find();

        return await result.then(function (e) {
            var arrayPlaces = [];
            e.forEach(element => {
                const obj = {};
                obj.name = element.get('name');
                obj.link = element.get('link');
                arrayPlaces.push(obj);
            });
            return arrayPlaces;
        });
    }

    
}