import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs';

import { FirebaseService } from "../posts/firebase.service";

export interface PostConfig {
  title: string;
  author: string;
  date: string | null;
  content: string | null; 
}

export interface PostsResponseConfig extends Array<PostConfig> {}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user_posts: PostsResponseConfig = [];

  constructor(private http: HttpClient, private firebase: FirebaseService) { }

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

  ngOnInit(): void {

    // this.getUserPosts();
    this.user_posts = this.firebase.getUserPosts();  
    console.log(this.user_posts);

  }

}
