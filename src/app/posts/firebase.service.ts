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

    saveUserPost(Post: PostConfig){

        let saveUrl = this.constants.FIREBASE_ROOT_URL + 'posts.json';
        
        this.api
        .post(saveUrl, Post)
        .subscribe(responseData => {
            console.log(responseData);
        });
    }

    async getUserPosts(){

        let getUrl = this.constants.FIREBASE_ROOT_URL + 'posts.json';
        let user_posts: PostsResponseConfig = [];

        this.http
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
        .subscribe((posts: PostsResponseConfig) => {

            user_posts = posts;
            console.log(posts);
        })

        return user_posts;
    }

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