import { Component, OnInit } from '@angular/core';

import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";


type post = {
  title: string;
  author: string;
  date: string | null;
  content: string;
}

export default post;



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DatePipe]
})
export class PostComponent implements OnInit {

  title: string = "";
  author: string = "";
  date: string | null = null;
  content: string = "";

  newPost: post|null = null;

  // @Input dateObj: Date = new Date();

  constructor(private datePipe: DatePipe, private http: HttpClient) {
  }

  ngOnInit(): void {
    
  }

  onNewPost(title: string, content: string){
    
    this.title = title;
    this.content = content;

    console.log(title);
    console.log(content);

    let today = new Date();
    this.date = this.datePipe.transform(today, 'd/M/yy');

    console.log(this.date);

    this.newPost = {
      'title': title,
      'author': "author", 
      'date': this.date,
      'content': content
    }

    this.http
      .post(
        "https://angular-complete-f99ef-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json", 
        this.newPost
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
