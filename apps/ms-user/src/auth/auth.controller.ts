import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserSiginingUp, UserSigningIn } from "@chamster/models";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() userSigningUp: UserSiginingUp) {
    return this.authService.signup(userSigningUp);
  }

  @Post("signin")
  signin(@Body() userSiginingIn: UserSigningIn) {
    return this.authService.signin(userSiginingIn);
  }

  @Post("signout")
  signout() {
    return {
      status: "success",
    };
  }
}