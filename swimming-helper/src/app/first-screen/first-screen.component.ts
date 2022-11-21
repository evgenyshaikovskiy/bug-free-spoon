import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent {
  @Input('app') app!: AppComponent;

  public onSignUpClick() {
    this.disableCurrentScreen();
    this.app.signUpVisibility = true;
  }

  public onLoginClick() {
    this.disableCurrentScreen();
    this.app.logInVisibility = true;
  }

  private disableCurrentScreen() {
    this.app.firstScreenVisibility = false;
  }
}
