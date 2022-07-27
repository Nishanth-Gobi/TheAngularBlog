import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router, private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  onSignUp(){
    
    let email = this.myForm.get('email')!.value;
    let password = this.myForm.get('password')!.value;
    
    console.log(email, password);
    
    if(this.myForm.get('email') && this.myForm.get('password')){

      if (this.firebase.registerUser(this.myForm.get('email')!.value, this.myForm.get('password')!.value)){

        //redirect to Home

      }  
    }
    else{

      console.log("Error onSignup()");
    }
  }
}
