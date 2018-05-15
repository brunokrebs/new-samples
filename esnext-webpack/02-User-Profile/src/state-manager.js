export class StateManager {

  authenticatedMessage()
  {
    let message = 'You are not logged in! Please log in to continue'
    if (this.isAuthenticated)
    { 
      message = 'You are logged in.'
    }
  }

  isAuthenticated() {
    if (localStorage.getItem('expires_at') === null)
      return false;
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
