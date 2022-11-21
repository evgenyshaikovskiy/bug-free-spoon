import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @Input('app') app!: AppComponent;

  public onSignUpClick() {
    this.app.signUpVisibility = false;
    this.app.mainMenuVisibility = true;
  }
}
