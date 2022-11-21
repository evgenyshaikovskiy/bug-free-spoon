import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'swimming-helper';

  public firstScreenVisibility: boolean = true;
  public signUpVisibility: boolean = false;
  public logInVisibility: boolean = false;

  public getThis(): AppComponent {
    return this;
  }

}
