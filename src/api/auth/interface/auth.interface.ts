import { User } from "../../user/interface/user";

export interface Auth extends User {
  email: string;
  password: string;
}
