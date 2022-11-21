import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import User from '../models/user';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent {
  @Input('app') app!: AppComponent;
  @Input('user') user!: User;

  public onHomeClick() {
    this.app.accountVisibility = false;
    this.app.mainMenuVisibility = true;
  }
}
