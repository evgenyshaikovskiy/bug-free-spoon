import { SwimmingResult } from "./swimming-result";
import Training from "./training";

export class User {
  public name: string;
  public password: string;
  public login: string;
  public level: string;
  public preferredStyle: string;
  public rank: string;
  public trainings: Training[];
  public resultsOfTrainings: SwimmingResult[];

  constructor(
    name: string,
    password: string,
    login: string,
    levelOfPreparation: string,
    preferredStyle: string,
    rank: string,
    trainings: Training[],
    resultsOfTrainings: SwimmingResult[]
  ) {
    this.name = name;
    this.password = password;
    this.login = login;
    this.level = levelOfPreparation;
    this.preferredStyle = preferredStyle;
    this.rank = rank;
    this.trainings = trainings;
    this.resultsOfTrainings = resultsOfTrainings;
  }
}

export default User;
