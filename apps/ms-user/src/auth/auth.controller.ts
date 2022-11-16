import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserSignedUp, UserSignedIn } from "@chamster/models";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() userSignedUp: UserSignedUp) {
    return this.authService.signup(userSignedUp);
  }
  @Post("signin")
  signin(@Body() userSignedIn: UserSignedIn) {
    return this.authService.signin(userSignedIn);
  }
  @Post("signout")
  signout() {
    return this.authService.signout();
  }
}
