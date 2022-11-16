import { UserSiginingUp, UserSigningIn } from "@chamster/models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signin(userSigningIn: UserSigningIn) {
    return {
      user: userSigningIn,
      token: "jkfdlsjlksjfskd",
    };
  }
  signup(userSiginingUp: UserSiginingUp) {
    return {
      user: userSiginingUp,
      token: "fioeurwoeiuioew",
    };
  }
  signout() {
    return { status: "success" };
  }
}
