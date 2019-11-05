import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authUser: any;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {

    const userLogin = {
      username: this.signInForm.get("email").value,
      password: this.signInForm.get("password").value,
    }

    Auth.signIn(userLogin).then(user => {
      this.authUser = user;
      this.route.navigate(['/home'])
    }).catch(err => console.log(err));
  }
}