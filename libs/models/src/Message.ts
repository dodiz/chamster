import { User } from "./user/User";

export interface Message {
  id: string;
  content: string;
  user: User;
  iat: Date;
}
