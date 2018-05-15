import { inject } from 'aurelia-framework';
import { Auth0Service } from './auth0-service';

@inject(Auth0Service)
export class Home {
  constructor(Auth0Service) {
    this.auth = Auth0Service;
  }
}
