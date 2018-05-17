import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { Auth0Service } from './auth0-service';

@inject(Auth0Service)

export class App {
  constructor(Auth0Service) {
    this.authservice = Auth0Service;
  }

  configureRouter(config, router) {
    config.title = 'Auth0 - Aurelia ';
    config.map([{
      route: ['', 'Home'],
      name: 'home',
      moduleId: PLATFORM.moduleName('./home'),
      nav: true,
      title: 'Home'
    }
    ]);

    this.router = router;

    //
    // Note that this following invocation is meaningful only
    //  when running it *after* redirect from the Auth0 server.
    //
    this.authservice.handleAuthentication();
  }
}

