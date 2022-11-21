import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-table-of-ranks',
  templateUrl: './table-of-ranks.component.html',
  styleUrls: ['./table-of-ranks.component.css']
})
export class TableOfRanksComponent {
  @Input('app') app!: AppComponent;

  public onGoBackClick() {
    this.app.tableVisibility = false;
    this.app.mainMenuVisibility = true;
  }
}
