import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userName: string;
  haveCode = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  forgotPasswordForm = new FormGroup({
    username: new FormControl(''),
  });

  resetCodeForm = new FormGroup({
    resetCode: new FormControl(''),
    newPassword: new FormControl(''),
  });

  onSubmitUsername() {
    const userLogin = {
      username: this.forgotPasswordForm.get("username").value
    }
    this.authService.forgotPassword(userLogin).then(res => {
      if (res && res.CodeDeliveryDetails.Destination) {
        alert('Check your email : ' + res.CodeDeliveryDetails.Destination);
        this.userName = userLogin.username;
        this.haveCode = true;
      }
    });
  }

  onSubmitNewPassword() {
    const userDataset = {
      username: this.userName,
      code: this.resetCodeForm.get("resetCode").value,
      newPassword: this.resetCodeForm.get("password").value
    }
    this.authService.resetPassword(userDataset);
  }
}
