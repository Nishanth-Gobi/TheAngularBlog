import { Component, OnInit } from '@angular/core';

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

  constructor(private firebase: FirebaseService) { }

  // Procedure to get all posts using Firebase service
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
