import { User } from "./user";

export interface Auth extends User {
  email: string;
  password: string;
}
