import { Parse } from 'parse';
import { parseAppId, parseUrlServer } from './apiURL';

export default class UserProvider {
    constructor() {
        this.parseInitialize()
    }

    parseInitialize() {
        Parse.initialize(parseAppId);
        Parse.serverURL = parseUrlServer;
    }

    login(usr,pwd){
        return new Promise((resolve,reject)=>{
            Parse.User.logIn(usr,pwd)
                .then((res)=>resolve(res))
                .catch((err)=>reject(err));
        });
    }

    currentUser(){
        return Parse.User.current();
    }
}