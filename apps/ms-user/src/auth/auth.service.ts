import { UserSiginingUp, UserSigningIn } from "@chamster/models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signin(userSigningIn: UserSigningIn) {
    return {
      token: "jkfdlsjlksjfskd",
    };
  }
  signup(userSiginingUp: UserSiginingUp) {
    return {
      token: "fioeurwoeiuioew",
    };
  }
}
