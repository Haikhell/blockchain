import * as express from 'express';
import { TransactionInfo } from '../../models/transactionInfo'
import { IResponceTransactions } from './interface';
import Contract from '../../contract/contract';

class TransactionController {
  public path = '/transaction';

  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(`${this.path}/:limit/:offset`, this.getAllTransactions);
    this.router.post(`${this.path}`, this.subscribeContract);
  }

  getAllTransactions = async (request: express.Request, response: express.Response) => {
    const { limit, offset } = request.params

    const allTransactions: IResponceTransactions = await TransactionInfo.findAndCountAll({
      order: [
        [
          'blockTimestamp',
          'DESC',
        ],
      ],
      limit: Number(limit),
      offset: Number(offset),
    })
    response.send(allTransactions);
  };

  subscribeContract = async (req: express.Request, res: express.Response) => {
    const { contractHash }: { contractHash: string } = req.body

    if (contractHash) {
      const contract = new Contract()

      contract.subscribeContract(contractHash)

      res.send({ message: "success" })
      return
    }

    res.send({ message: "bad parameters" })
  }
}

export default TransactionController;
