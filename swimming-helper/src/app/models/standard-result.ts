import { Distance } from "./distance";

export class StandardResult {
  public dict: { time: Date, distance: Distance };
  constructor(standardTimeForDistance: Date, distance: Distance) {
    this.dict = { time: standardTimeForDistance, distance: distance };
  }

}

export default StandardResult;
