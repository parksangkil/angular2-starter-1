/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppState} from "./services";

// Global styles
require('./style/style.scss');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/', name: 'Home', loader: () => require('es6-promise!./+home')('HomeComponent') },
])
export class App {

}
