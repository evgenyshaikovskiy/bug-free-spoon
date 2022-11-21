import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent {
  @Input('app') app!: AppComponent;

  public brasVideoVisibility: boolean = false;
  public butterflyVideoVisibility: boolean = false;
  public swimmingVideoVisibility: boolean = false;

  public onBackClick() {
    this.app.videoVisibility = false;
    this.app.mainMenuVisibility = true;
  }

  public clickBrasVideo() {
    this.brasVideoVisibility = !this.brasVideoVisibility;
  }

  public clickButterflyVideo() {
    this.butterflyVideoVisibility = !this.butterflyVideoVisibility;
  }

  public clickSwimmingVideo() {
    this.swimmingVideoVisibility = !this.swimmingVideoVisibility;
  }
}
