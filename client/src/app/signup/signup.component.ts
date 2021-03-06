import {Component, OnInit} from '@angular/core';
import {User} from '../user/user';
import {UserService} from '../user/user.service';
import {Settings} from '../settings';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent {
  user: User = new User();
  errors: any;
  loading: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {}

  signup() {
    this.loading = true;

    this.userService.signup(this.user)
      .then(this.handleSignupSuccess.bind(this))
      .catch(this.handleSignupError.bind(this))
      .then(() => this.loading = false);
  }

  handleSignupSuccess(token) {
    console.log('Successful signup', token);
    this.userService.handleLogin(token);
    this.router.navigate(['/'])
  }

  handleSignupError(res) {
    this.errors = res.json();
  }
}
