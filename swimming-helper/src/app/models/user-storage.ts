import User from "./user";

export class UserStorage {
  public available_users: User[];

  constructor(users: User[]) {
    this.available_users = users;
  }
}
