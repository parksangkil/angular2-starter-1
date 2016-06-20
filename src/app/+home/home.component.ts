import {Component} from '@angular/core';
import {db} from "../db";


@Component({
  moduleId: module.id,
  selector: 'app-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
})

export class HomeComponent {

  user = {
    name: '',
    password: ''
  };
  db = db;
  error;

  register() {
    db.User.register(this.user.name, this.user.password).then(() => {
      this.error = null;
    }, (error) => {
      this.error = error.message;
    });
  }

  logIn() {
    db.User.login(this.user.name, this.user.password).then(() => {
      this.error = null;
    }, (error) => {
      this.error = error.message;
    });
  }

}
