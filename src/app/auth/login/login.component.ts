import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authUser: any;
  constructor(private authService: AuthService) { }

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

    this.authService.login(userLogin);
  }
}
