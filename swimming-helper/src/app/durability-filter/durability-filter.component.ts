import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-durability-filter',
  templateUrl: './durability-filter.component.html',
  styleUrls: ['../style-of-swimming-filter/style-of-swimming-filter.component.css']
})
export class DurabilityFilterComponent {
  @Input('app') app!: AppComponent;

  public goBack() {
    this.app.searchDurabilityOfTrainingFilterVisibility = false;
    this.app.searchPageVisibility = true;
  }
}
