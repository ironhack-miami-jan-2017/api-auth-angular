import { Component } from '@angular/core';

import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  loginInfo = {};
  signupInfo = {};

  user: any;
  error: string;

  constructor(private mySession: SessionService) {}

  login() {
    console.log('LOGIN');
  }

  signup() {
    console.log('SIGNUP');
  }
}
