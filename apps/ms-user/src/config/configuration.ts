import { registerAs } from "@nestjs/config";
import { IConfig } from "./IConfig";

export const MS_USER_CONFIGURATION = "ms-user-configuration";

export const configuration = registerAs<IConfig>(MS_USER_CONFIGURATION, () => {
  return {
    protocol: process.env.PROTOCOL,
    host: process.env.HOST,
    port: +process.env.PORT,
    globalPrefix: process.env.GLOBAL_PREFIX || "api",
    get domain() {
      return `${this.protocol}://${this.host}:${this.port}`;
    },
    db: {
      get domain() {
        return `${this.db.protocol}://${this.db.host}:${this.db.port}/${this.db.name}`;
      },
      protocol: process.env.DB_PROTOCOL,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  };
});
