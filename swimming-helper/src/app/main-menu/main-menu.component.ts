import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Input('app') app!: AppComponent;

  public onExitClick() {
    this.app.mainMenuVisibility = false;
    this.app.firstScreenVisibility = true;
  }

  public onAccountClick() {
    this.app.mainMenuVisibility = false;

  }

  public onTableClick() {
    this.app.mainMenuVisibility = false;

  }

  public onVideosClick() {
    this.app.mainMenuVisibility = false;

  }

  public onTrainingsClick() {
    this.app.mainMenuVisibility = false;

  }

  public onStopwatchClick() {
    this.app.mainMenuVisibility = false;

  }
}
