import { Sequelize } from "sequelize-typescript"
import config from "../config/config"

import { TransactionInfo } from './transactionInfo'

const connection = new Sequelize({
  dialect: "postgres",
  host: config.DB_HOST,
  username: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME,
  logging: false,
  port: Number(config.DB_PORT),
  models: [TransactionInfo],
});

export default connection

