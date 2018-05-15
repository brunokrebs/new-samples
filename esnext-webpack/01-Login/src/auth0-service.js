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
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.eventAggregator = eventAggregator;
    this.isAuthenticated = false;
  }

  get isAuthenticated() {
    return this.authenticated;
  }

  set isAuthenticated(value) {
    this.authenticated = value;
  }


  login() {
    this.auth.authorize();
  }

  logout() {
    this.isAuthenticated = false;
  }


  handleAuthentication() {
    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.isAuthenticated = true;
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
    // remove hash so we dont get router failure
    if (window.location.hash.indexOf('#access_token=') === 0) {
      window.location.hash = '';
    }
  }
}
