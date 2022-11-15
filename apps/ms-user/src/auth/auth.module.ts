import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { environment } from "../environments/environment";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    MongooseModule.forRoot(environment.DB_URL, {
      auth: {
        password: "admin",
        username: "admin",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
