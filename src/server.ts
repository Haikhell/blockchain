import App from './app';
import config from './config/config';
import TransactionController from './controller/transaction';
import connection from './models/connect';

async function server() {
  await connection.sync();

  const app: App = new App(
    [
      new TransactionController()
    ],
    Number(config.PORT),
  );

  return app.listen();
}

export default server

