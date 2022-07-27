import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs';

import { FirebaseService } from "../posts/firebase.service";

// Interface representing the Post type 
export interface PostConfig {
  title: string;
  author: string;
  date: string | null;
  content: string | null; 
}

// Interface representing the type of post collection 
export interface PostsResponseConfig extends Array<PostConfig> {}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user_posts: PostsResponseConfig = [];

  // Boolean vaiable to control rendering the HTML 
  isDataAvailable: boolean = false;

  constructor(private http: HttpClient, private firebase: FirebaseService) { }

  // Procedure to get posts from Firebase
  // getUserPosts(){
        
  //   this.http
  //     .get<{ [key: string]: PostConfig }>(
  //       "https://angular-complete-f99ef-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
  //     )
  //     .pipe(map((responseData: { [key: string]: PostConfig }) => {
  //       const postsArray: PostsResponseConfig = [];
  //       for (const key in responseData) {
  //         if( responseData.hasOwnProperty(key)){
  //           postsArray.push({ ...responseData[key] });
  //         }
  //       }
  //       return postsArray;
  //     }))
  //     .subscribe((posts: PostsResponseConfig) => {
  //       this.user_posts  = posts;
  //       // posts.forEach(post => this.user_posts.push(Object.assign({}, post)))

  //       console.log(this.user_posts);    
  //     })
  // }

  // ngOnInit() {
  //   this.getUserPosts();
  // }

  async ngOnInit(): Promise<void> {

    try {
      
      this.firebase.getPosts()
      .subscribe((posts: PostsResponseConfig) => {

        this.user_posts = posts;
        this.isDataAvailable = true;
        console.log(posts);
      })

    } catch (error) {
      
      console.log("Error: ", error);
    }
  }
}
