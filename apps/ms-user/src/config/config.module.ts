import { Module } from "@nestjs/common";
import { ConfigModule as ConfigurationModule } from "@nestjs/config";
import { configuration } from "./configuration";

@Module({
  imports: [
    ConfigurationModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class ConfigModule {}
