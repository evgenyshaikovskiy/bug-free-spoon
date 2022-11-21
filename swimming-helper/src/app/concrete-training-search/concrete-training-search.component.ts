import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-concrete-training-search',
  templateUrl: './concrete-training-search.component.html',
  styleUrls: ['../search-page/search-page.component.css']
})
export class ConcreteTrainingSearchComponent {
  @Input('app') app!: AppComponent;

  public firstButtonStateConcrete: boolean = false;
  public secondButtonStateConcrete: boolean = false;
  public thirdButtonStateConcrete: boolean = false;

  public onSpeedClick() {
    this.firstButtonStateConcrete = !this.firstButtonStateConcrete;
  }

  public onPerfectingTechnique() {
    this.secondButtonStateConcrete = !this.secondButtonStateConcrete;
  }

  public onPracticing() {
    this.thirdButtonStateConcrete = !this.thirdButtonStateConcrete;
  }

  public goBack() {
    this.app.searchConcreteTrainingVisibility = false;
    this.app.searchPageVisibility = true;
  }
}
