import axios from 'axios';
import App from '../../src/app';
import config from '../../src/config/config';
import TransactionController from '../../src/controller/transaction';
import connection from '../../src/models/connect';
import server from '../../src/server'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

test('transaction controller', async () => {
  const serv = await server()

  const contractTrack = await axios.post('http://localhost:3000/transaction', {
    contractHash: "0x55d398326f99059ff775485246999027b3197955"
  });

  expect(contractTrack.data).toEqual({ message: 'success' });
  await delay(4000)
  const checkData = await axios.get('http://localhost:3000/transaction/10/0');

  expect(checkData.data.rows[0].tokenContract).toEqual("0x55d398326f99059ff775485246999027b3197955");
});
