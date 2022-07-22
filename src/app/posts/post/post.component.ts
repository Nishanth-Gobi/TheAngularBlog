import { Component, OnInit } from '@angular/core';

import { DatePipe } from "@angular/common";

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

  // @Input dateObj: Date = new Date();

  constructor(private datePipe: DatePipe) {
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
  }

}
