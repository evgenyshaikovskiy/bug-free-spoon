import Distance from "./distance";

export class Training {

  public id: number;
  public category: string;
  public length: number;
  public style: string;
  public isMixed: boolean;
  public train: Distance[];

constructor(
  id: number,
  categoryOfTraining: string,
  lengthOfTraining: number,
  styleOfSwimming: string,
  isStyleMixed: boolean,
  train: Distance[]
) {
  this.id = id;
  this.category = categoryOfTraining;
  this.length = lengthOfTraining;
  this.style = styleOfSwimming;
  this.isMixed = isStyleMixed;
  this.train = train;
}
}

export default Training;

