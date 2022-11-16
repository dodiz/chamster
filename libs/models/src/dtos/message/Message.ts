import { User } from "..";

export interface Message {
  id: string;
  content: string;
  user: User;
  iat: Date;
}
