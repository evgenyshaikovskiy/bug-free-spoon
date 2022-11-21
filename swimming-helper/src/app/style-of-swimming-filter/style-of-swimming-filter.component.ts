import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-style-of-swimming-filter',
  templateUrl: './style-of-swimming-filter.component.html',
  styleUrls: ['./style-of-swimming-filter.component.css']
})
export class StyleOfSwimmingFilterComponent {
  @Input('app') app!: AppComponent;

  public goBack() {
    this.app.searchStyleOfTrainingFilterVisibility = false;
    this.app.searchPageVisibility = true;
  }
}
