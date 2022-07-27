import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { ApiHttpService } from "../app.service";
import { Constants } from "../constants";

import { User } from "../account/account.component";
import { map } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FirebaseService{

    constructor(private api: ApiHttpService, private http: HttpClient, private constants: Constants){ 

        // localStorage.clear();
    }

    loadUserDataToLocal(){

// De bug

        let loadUrl = this.constants.FIREBASE_ROOT_URL + 'users.json'

        this.http
        .get<{ [key: string]: User }>(loadUrl)
        .pipe(map((responseData: {[key: string]: User}) => {

            for(const key in responseData){

                console.log(key, responseData[key]);
                localStorage.setItem(responseData[key].email, responseData[key].password);
            }
        }));
    }

    ngOnInit(){
        this.loadUserDataToLocal();
    }

    registerUser(email: string, password: string){

        let registerUrl = this.constants.FIREBASE_ROOT_URL + 'users.json';

        // check for duplicates
        if (localStorage.getItem(email) == null){

            // Move the data to Firebase after the session?
            this.api
            .post(registerUrl, {'email': email, 'password': password})
            .subscribe(responseData => {
                console.log(responseData)
            });
    
            // store credentials in local storage
            localStorage.setItem(email, password);
            return true;
        }
        else{

            console.log("Error: Duplicate email entry");
            return false;
        }
    }

    authenticateUser(email: string, password: string){

        if (localStorage.getItem(email)!=null){

            if (localStorage.getItem(email) == password){
                
                return true;
            }
        }
        else{

        }
        return false;
    }
}