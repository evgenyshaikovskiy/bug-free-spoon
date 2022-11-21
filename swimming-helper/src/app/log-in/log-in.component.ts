import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  @Input('app') app!: AppComponent;

  public onLoginClick() {
    this.app.logInVisibility = false;
    this.app.mainMenuVisibility = true;
  }
}
