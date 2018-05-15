import {PLATFORM} from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import  * as StateManager from './state-manager'

@inject(StateManager)
export class Home {
  
  constructor(StateManager) {
    this.stateManager = StateManager;
  }

  get stateMessage() {
    return stateManager.AuthenticatedMessage();
  } 

}
