import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoreModule } from "@chamster/core";

import { ConfigModule } from "./config/config.module";
import { configuration } from "./config/configuration";
import { IConfig } from "./config/IConfig";

import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    CoreModule,
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [configuration.KEY],
      useFactory: ({ db }: IConfig) => {
        return {
          uri: db.domain,
          dbName: db.name,
          authSource: db.username,
          auth: {
            username: db.username,
            password: db.password,
          },
        };
      },
    }),
    AuthModule,
  ],
})
export class AppModule {}
