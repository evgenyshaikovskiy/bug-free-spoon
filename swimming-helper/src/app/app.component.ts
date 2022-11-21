import { Component } from '@angular/core';
import User from './models/user';

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
  public mainMenuVisibility: boolean = false;
  public tableVisibility: boolean = false;
  public accountVisibility: boolean = false;

  private user: User = new User('Сергей', 'adsad', 'dasdsa', 'Профессионал', 'Брасс', 'КМС', [], [], 'Повышение скорости');

  public getThis(): AppComponent {
    return this;
  }

  public injectUser() {
    return this.user;
  }

}
