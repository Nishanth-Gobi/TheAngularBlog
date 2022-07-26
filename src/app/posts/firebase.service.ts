import { Injectable } from "@angular/core";
import { ApiHttpService } from "../app.service";

import { Constants } from "../constants";

import { PostConfig } from "./posts.component";


@Injectable({
    providedIn: 'root'
})
export class FirebaseService{

    constructor(private api: ApiHttpService, private constants: Constants){

    }

    saveUserPost(Post: PostConfig){

        let save_url = this.constants.FIREBASE_ROOT_URL + 'posts.json';
        
        this.api
        .post(save_url, Post)
        .subscribe(responseData => {
            console.log(responseData);
        });
    }


}