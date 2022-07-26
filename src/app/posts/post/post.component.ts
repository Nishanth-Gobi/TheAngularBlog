import { Component, OnInit } from '@angular/core';

import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostConfig } from "../posts.component";

import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DatePipe]
})
export class PostComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    'title': new FormControl(null, [Validators.required]),
    'content': new FormControl(null, [Validators.required])
  })

  constructor(private datePipe: DatePipe, private http: HttpClient, private firebaseService: FirebaseService) { }

  ngOnInit(): void { }

  onNewPost(){
    
    let today = new Date();

    let newPost: PostConfig = {
      'title': this.myForm.get('title')?.value,
      'author': "author", 
      'date': this.datePipe.transform(today, 'd/M/yy'),
      'content': this.myForm.get('content')?.value
    }

    this.firebaseService.saveUserPost(newPost);
  }

}
