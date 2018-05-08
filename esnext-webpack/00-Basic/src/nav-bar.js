import {inject} from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import { router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator, Router)
export class NavBar {
  @bindable router

  constructor(eventAggregator, router) {
    this.eventAggregator = eventAggregator;
    this.router = router;
    this.navbar = this;

    this.startSubscriber();
  }

  startSubscriber() {
    let navbar = this.navbar;

  // This code will handle the navbar menu items dependent on application's
  // state (authenticated, authorized, logged out ...)
  }
}
