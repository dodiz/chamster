import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { IConfig } from "./config/IConfig";

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: ["idk"],
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
  ],
})
export class AppModule {}
