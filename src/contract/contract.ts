import { ethers } from 'ethers';
import config from '../config/config'
import { TransactionInfo } from '../models/transactionInfo'

class Contract {
  private provider: ethers.providers.JsonRpcProvider
  private abi: string[]

  constructor(providerLink?: string) {
    this.provider = new ethers.providers.JsonRpcProvider(providerLink || config.PROVIDER);

    this.abi = [
      'event Transfer(address indexed from, address indexed to, uint amount)',
    ];
  }

  public subscribeContract(contractHash: string): void {
    const contract = new ethers.Contract(contractHash, this.abi, this.provider);

    contract.on('Transfer', (from, to, amount, value, event) => {
      this.saveToDbTransaction(value.transactionHash, contractHash, from, to, amount._hex)
    });
  }

  private async saveToDbTransaction(
    transactionHash: string,
    tokenContract: string,
    from: string,
    to: string,
    amount: string
  ): Promise<void> {
    const transaction = await this.provider.getTransaction(transactionHash)

    if (transaction.blockHash) {
      const timestamp = ((await this.provider.getBlock(transaction.blockHash)).timestamp) * 1000

      await TransactionInfo.create(
        {
          hash: transactionHash,
          tokenContract,
          from,
          to,
          amount,
          blockTimestamp: new Date(timestamp)
        }
      )
    }
  }
}

export default Contract