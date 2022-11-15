export interface IConfig {
  protocol: string;
  host: string;
  port: number;
  globalPrefix: string;
  domain: string;
  db: {
    domain: string;
    protocol: string;
    host: string;
    port: number;
    name: string;
    username: string;
    password: string;
  };
}
