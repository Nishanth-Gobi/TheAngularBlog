import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onLogIn() {

    let email = this.myForm.get('email');
    let password = this.myForm.get('password');

    console.log(email, password);

    if(true){
    // this.router.navigate([''];)
    }
  }

}
