import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";

import post from "./post/post.component";

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

  constructor(private http: HttpClient) { }

  getUserPosts(){
    this.http
      .get<PostsResponseConfig>(
        "https://angular-complete-f99ef-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
      )
      .subscribe((posts: PostsResponseConfig) => {
        this.user_posts = posts;
        // posts.forEach(post => this.user_posts.push(Object.assign({}, post)))

        console.log(this.user_posts);
      })
  }

  ngOnInit(): void {

    this.getUserPosts();
      
  }

}
