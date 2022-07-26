import { Injectable } from "@angular/core";
import { ApiHttpService } from "../app.service";

import { map } from "rxjs";

import { Constants } from "../constants";
import { PostConfig, PostsResponseConfig } from "./posts.component";


@Injectable({
    providedIn: 'root'
})
export class FirebaseService{

    constructor(private api: ApiHttpService, private constants: Constants){

    }

    saveUserPost(Post: PostConfig){

        let saveUrl = this.constants.FIREBASE_ROOT_URL + 'posts.json';
        
        this.api
        .post(saveUrl, Post)
        .subscribe(responseData => {
            console.log(responseData);
        });
    }

    getUserPosts(){

        let getUrl = this.constants.FIREBASE_ROOT_URL + 'posts.json';

        let user_posts: PostsResponseConfig = [];

        let api_response = this.api.get_posts(getUrl);

        

        // api_response.pipe(map((responseData: { [key: string]: PostConfig }) => {
        //     const postsArray: PostsResponseConfig = [];
        //     for (const key in responseData) {
        //       if( responseData.hasOwnProperty(key)){
        //         postsArray.push({ ...responseData[key] });
        //       }
        //     }
        //     return postsArray;
        //   }))

        
        // .subscribe((posts: PostsResponseConfig) => {

        //     user_posts = posts;
        //     console.log(posts);
        //   })

        return user_posts;
    }

}