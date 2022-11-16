import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { configuration } from "./config/configuration";
import { IConfig } from "./config/IConfig";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<IConfig>(configuration.KEY);
  app.enableCors();
  app.setGlobalPrefix(config.globalPrefix);
  await app.listen(config.port);
  Logger.log(
    `🚀 Application is running on: ${config.domain}/${config.globalPrefix}`
  );
}

bootstrap();
