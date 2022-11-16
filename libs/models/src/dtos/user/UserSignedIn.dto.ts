import { IsString } from "class-validator";

export class UserSignedIn {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
