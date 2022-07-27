import { Injectable } from "@angular/core";
import { ApiHttpService } from "../app.service";

import { map, Observable } from "rxjs";

import { Constants, PostGet } from "../constants";
import { PostConfig, PostsResponseConfig } from "./posts.component";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class FirebaseService{

    constructor(private api: ApiHttpService, private constants: Constants, private http: HttpClient){

    }

    // Procedure to save user's post in Firebase upon post submission
    saveUserPost(Post: PostConfig){

        let saveUrl = this.constants.FIREBASE_ROOT_URL + 'posts.json';
        
        this.api
        .post(saveUrl, Post)
        .subscribe(responseData => {
            console.log(responseData);
        });
    }

    // Procedure to get posts from Firebase
    getPosts(): Observable<any> {
        
        let getUrl = this.constants.FIREBASE_ROOT_URL + 'posts.json';

        return this.http
            .get<{ [key: string]: PostConfig}>(getUrl)
            .pipe(map((responseData: { [key: string]: PostConfig }) => {
                const postsArray: PostsResponseConfig = [];
                for (const key in responseData) {
                    if( responseData.hasOwnProperty(key)){
                        postsArray.push({ ...responseData[key] });
                    }
                }
                return postsArray;
            }))        
    }

}