
export interface ITransaction {
  id: number
  hash: string
  tokenContract: string
  from: string
  to: string
  amount: string
  createdAt: Date
  updatedAt: Date
}

export interface IResponceTransactions {
  count: number
  rows: ITransaction[]
}

