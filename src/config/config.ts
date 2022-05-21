import { config } from 'dotenv';

config();

const { env } = process;

export default Object.freeze({
  PORT: env.PORT || 3001,
  APP_DOMAIN: env.APP_DOMAIN,
  DB_HOST: env.DB_HOST || "localhost",
  DB_NAME: env.DB_NAME || "postgres",
  DB_USER: env.DB_USER || "postgres",
  DB_PASS: env.DB_PASS || "1111111",
  DB_PORT: env.DB_PORT || 5432,
  PROVIDER: env.PROVIDER
});
