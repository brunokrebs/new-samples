import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Auth0 - Aurelia ';
    config.map([
      { route: ['', 'Home'], name: 'home',  moduleId: PLATFORM.moduleName('./home'),   nav: true, title: 'Home' },
      { route: 'Login',      name: 'login', moduleId: PLATFORM.moduleName('./login'),  nav: true, title: 'Login' }
    ]);

    this.router = router;
  }
}
