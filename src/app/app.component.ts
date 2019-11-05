import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AWS Cognito - Test';

  // constructor(public amplify: AmplifyService) {
  //   amplify.auth().currentAuthenticatedUser().then(user => {
  //     console.log(user);
  //   })
  //   .catch(err => console.log(err));
  // }
}
