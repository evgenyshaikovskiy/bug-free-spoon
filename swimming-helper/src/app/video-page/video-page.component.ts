import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent {
  @Input('app') app!: AppComponent;

  public onBackClick() {
    this.app.videoVisibility = false;
    this.app.mainMenuVisibility = true;
  }
}
