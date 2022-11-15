import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AuthModule } from "./auth/auth.module";

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const globalPrefix = "api";
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
