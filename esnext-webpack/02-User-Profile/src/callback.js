import auth from 'aurelia-framework';
import { AuthService } from './services/auth-service';

@inject(AuthService)
export class Callback {

  constructor(AuthService) {
    this.service = AuthService;

    //this.service.handleAuthentication();
  }
}
