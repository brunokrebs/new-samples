import { AUTH_CONFIG } from './auth0-config';
import auth from 'auth0-js';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Auth0Service {

  constructor(eventAggregator) {
  
    this.auth = new auth.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientID,
      redirectUri: AUTH_CONFIG.callbackUri,
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.eventAggregator = eventAggregator;
  }

  get isAuthenticated() {
    return this.authenticated;
  }

  set isAuthenticated(value) {
    this.authenticated = value;
  }


  login() {
    alert("Login clicked");
  }

  logout() {
    alert("Logout clicked");
  }


  handleAuthentication() {
    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }
}
