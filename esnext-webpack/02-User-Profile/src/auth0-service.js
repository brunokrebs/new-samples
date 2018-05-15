import auth from 'auth0-js';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AUTH_CONFIG } from './auth0-config';

@inject(Router, EventAggregator)
export class Auth0Service {

  constructor(router, eventAggregator) {
    this.router = Router;
    this.eventAggregator = eventAggregator;
    this.auth = new auth.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientID,
      redirectUri: AUTH_CONFIG.callbackUri,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid'
    });
  }

  isAuthenticated(ignoreLocalStorage) {
    if (!ignoreLocalStorage) {    
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    } else {
      return false;
    }
  }

  login() {
    this.auth.authorize();
  }

  handleAuthentication() {
    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);

        //
        // tell navbar to set the "logged in state" ui
        //
        this.eventAggregator.publish('authChannel', 'authenticated');
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

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }
}
