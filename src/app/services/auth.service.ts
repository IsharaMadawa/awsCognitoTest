import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private route: Router, public amplify: AmplifyService) { }

    isAuthenticated(): any {
        return this.amplify.auth().currentAuthenticatedUser().then(user => {
            return user;
        }).catch(err => {
            console.log(err);
        });
    }

    getAuthenticatedUser(): any {
        this.amplify.auth().currentAuthenticatedUser().then(res => {
            if (res) {
                return res;
            }
        })
            .catch(err => { console.log(err) });
    }

    login(userForm: any): void {
        Auth.signIn(userForm).then(user => {
            if (user) {
                this.route.navigate(['/dashboard']);
            }
        }).catch(err => console.log(err));
    }

    SignOut() {
        return Auth.signOut().then(res => {
            this.route.navigate(['/login']);
        })
            .catch(err => console.log(err));
    }
}