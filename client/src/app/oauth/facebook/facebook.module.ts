import {NgModule} from '@angular/core';
import {FacebookAuthorizerComponent} from './facebook_authorizer.component';
import {FacebookTokenHandlerComponent} from './facebook_token_handler.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FacebookService} from './facebook.service';
import {UserService} from '../../user/user.service';
import {ROUTES} from './facebook-routes.config';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    HttpModule
  ],
  declarations: [
    FacebookAuthorizerComponent,
    FacebookTokenHandlerComponent
  ],
  providers: [
    FacebookService,
    UserService
  ]
})
export class FacebookModule {}
