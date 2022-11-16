import { Contains, IsEmail, IsString, Matches, Min } from "class-validator";
import {
  ContainsLowerLetter,
  ContainsNumber,
  ContainsSpecialCharacter,
  ContainsUpperLetter,
} from "../../validators";
export class UserSignedUp {
  @IsEmail()
  email: string;
  @IsString()
  username: string;
  @IsString()
  @Min(8)
  @ContainsLowerLetter()
  @ContainsUpperLetter()
  @ContainsSpecialCharacter()
  @ContainsNumber()
  password: string;
}
