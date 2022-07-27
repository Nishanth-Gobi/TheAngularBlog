import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup  = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router, private firebase: FirebaseService) { }

  ngOnInit(): void {
    
  }

  onLogIn() {

    let email = this.myForm.get('email')!.value;
    let password = this.myForm.get('password')!.value;

    console.log(email, password);

    if(this.firebase.authenticateUser(email, password)){
    
      this.router.navigate(['']);
    }
    else{

      console.log("Error on Login()");
    }
  }

}
