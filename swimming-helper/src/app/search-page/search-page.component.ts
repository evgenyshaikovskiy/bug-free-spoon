import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  @Input('app') app!: AppComponent;

  public firstButtonState: boolean = false;
  public secondButtonState: boolean = false;
  public thirdButtonState: boolean = false;

  public onTrainSkills() {
    this.firstButtonState = !this.firstButtonState;
  }

  public onPreferredStyle() {
    this.secondButtonState = !this.secondButtonState;
  }

  public onDurabilityClick() {
    this.thirdButtonState = !this.thirdButtonState;
  }

  public onApplyFilters() {
    if (this.firstButtonState) {
      this.app.searchPageVisibility = false;
      this.app.searchConcreteTrainingVisibility = true;
    }

    if (this.secondButtonState) {
      this.app.searchPageVisibility = false;
      this.app.searchStyleOfTrainingFilterVisibility = true;
    }

    if (this.thirdButtonState) {
      this.app.searchPageVisibility = false;
      this.app.searchDurabilityOfTrainingFilterVisibility = true;
    }

    // if (this.secondButtonState) {
    //   this.app.searchPageVisibility = false;
    //   this.app.reloadSearchFilters(2);
    //   this.app.searchConcreteTrainingVisibility = true;
    // }

    // if (this.thirdButtonState) {
    //   this.app.searchPageVisibility = false;
    //   this.app.reloadSearchFilters(3);
    //   this.app.searchConcreteTrainingVisibility = true;
    // }
  }
}
