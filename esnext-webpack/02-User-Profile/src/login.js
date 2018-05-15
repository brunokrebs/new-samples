import { inject } from 'aurelia-framework';
import { Auth0Service } from './auth0-service';

@inject(Auth0Service)
export class Login {

  constructor(Auth0Service) {
    this.authService = Auth0Service;
    let ignoreLocalStorage = true;

    if (this.authService.isAuthenticated(ignoreLocalStorage)) {
      // The user just logged out (remember the Login navbar item is a toggle)
      // so the cleanout actions are all here.
      //
      this.authService.logout();
    } else {
      this.authService.login();
    }    
  }
}
