import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { ApiHttpService } from "../app.service";
import { Constants } from "../constants";

@Injectable({
    providedIn: 'root'
})
export class FirebaseService{

    user_data: {[key: string]: string} = {};

    constructor(private api: ApiHttpService, private http: HttpClient, private constants: Constants){ }

    loadUserDataToLocal(){

        let loadUrl = this.constants.FIREBASE_ROOT_URL + 'users.json'

        let UserData = this.api.get(loadUrl);
        console.log(UserData); 
    }

    ngOnInit(){
        this.loadUserDataToLocal();
    }

    registerUser(email: string, password: string){

        let registerUrl = this.constants.FIREBASE_ROOT_URL + 'users.json';

        // check for duplicates

        if (!(email in this.user_data)){

            // Move the data to Firebase after the session?
            this.api
            .post(registerUrl, {'email': email, 'password': password})
            .subscribe(responseData => {
                console.log(responseData)
            });
    
            // this.user_data[email] = password;
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
        return false;
        
        // else{
        //     this.loadUserDataToLocal();
        // }
    }
}