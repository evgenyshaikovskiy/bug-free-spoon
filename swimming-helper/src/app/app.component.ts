import { Component } from '@angular/core';
import User from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'swimming-helper';

  public searchFilters!: {highlightedBtnName: string, firstBtnName: string, secondBtnName: string, thirdBtnName: string};

  public firstScreenVisibility: boolean = false;
  public signUpVisibility: boolean = false;
  public logInVisibility: boolean = false;
  public mainMenuVisibility: boolean = true;
  public tableVisibility: boolean = false;
  public accountVisibility: boolean = false;
  public videoVisibility: boolean = false;
  public searchPageVisibility: boolean = false;
  public searchConcreteTrainingVisibility: boolean = false;
  public searchStyleOfTrainingFilterVisibility: boolean = false;
  public searchDurabilityOfTrainingFilterVisibility: boolean = false;
  public stopWatchPageVisibility: boolean = false;

  private user: User = new User('Сергей', 'adsad', 'dasdsa', 'Профессионал', 'Брасс', 'КМС', [], [], 'Повышение скорости');

  public getThis(): AppComponent {
    return this;
  }

  public injectUser() {
    return this.user;
  }

}
