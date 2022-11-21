import Distance from "./distance";

export class SwimmingResult {
  public dict: { time: Date, distance: Distance };
  constructor(time: Date, distance: Distance) {
    this.dict = { time: time, distance: distance };
  }
}
