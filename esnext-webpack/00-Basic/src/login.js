import { inject } from 'aurelia-framework';
import { Auth0Service } from './auth0-service';

@inject(Auth0Service)
export class Login {

  constructor(auth0Service) {
    this.auth0Service = auth0Service;
  }
}
