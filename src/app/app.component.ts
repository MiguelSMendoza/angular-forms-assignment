import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  user = {
    email: '',
    subscription: 'Advanced',
    password: ''
  };

  onSubmit() {
    console.log(this.userForm);
  }
}
