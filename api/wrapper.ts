import { Config, IConfig } from "../config/config";
import { IUser } from "../types/user";

export class ApiWrapper {
  private config: IConfig;

  constructor() {
    this.config = Config;
  }

  addUser = async (user: IUser) => {
    const response = await fetch(this.config.backend + "/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response;
  };
}
