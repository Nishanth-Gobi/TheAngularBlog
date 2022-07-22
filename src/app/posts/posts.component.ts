import { Component, OnInit } from '@angular/core';

import post from "./post/post.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user_posts: post[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
