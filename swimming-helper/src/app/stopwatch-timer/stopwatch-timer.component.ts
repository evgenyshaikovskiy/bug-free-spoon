import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-stopwatch-timer',
  templateUrl: './stopwatch-timer.component.html',
  styleUrls: ['./stopwatch-timer.component.css']
})
export class StopwatchTimerComponent implements OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.timerRef);
  }

  @Input('app') app!: AppComponent;
  public counter!: number;
  private timerRef!: any;
  public isRunning: boolean = false;

  public startTimer() {
    this.counter = 0;
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  public clearTimer() {
    this.isRunning = false;
    clearInterval(this.timerRef);
  }

  public goBack() {
    this.app.stopWatchPageVisibility = false;
    this.app.mainMenuVisibility = true;
  }
}

