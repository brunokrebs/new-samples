import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { Auth0Service } from './auth0-service';

@inject(Auth0Service)

export class App {

  constructor(Auth0Service) {
    this.auth = Auth0Service;
    //
    // This invocation extracts the results of the authentication from 
    // the "callback uri", supplied by Auth0 server.
    //
    this.auth.handleAuthentication();
  }

  configureRouter(config, router) {
    config.title = 'Auth0 - Aurelia ';
    config.map([{
        route: ['', 'Home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('./home'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'Login',
        name: 'login',
        moduleId: PLATFORM.moduleName('./login'),
        nav: true,
        title: 'Login'
      }
    ]);

    this.router = router;
  }
}

