import { UserSignedIn, UserSignedUp } from "@chamster/models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signin(userSignedIn: UserSignedIn) {
    return {
      token: "jkfdlsjlksjfskd",
    };
  }
  signup(userSignedUp: UserSignedUp) {
    return {
      token: "fioeurwoeiuioew",
    };
  }
  signout() {
    return { status: "success" };
  }
}
