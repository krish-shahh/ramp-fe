import { FunctionComponent } from "react"
import { Transaction } from "../../utils/types"

export type SetTransactionApprovalFunction = (params: {
  transactionId: string
  newValue: boolean
}) => Promise<void>

export type UpdateTransactionApprovalFunction = (transactionId: string, newValue: boolean) => void

type TransactionsProps = {
  transactions: Transaction[] | null
  updateTransactionApproval: UpdateTransactionApprovalFunction
}

type TransactionPaneProps = {
  transaction: Transaction
  loading: boolean
  setTransactionApproval: SetTransactionApprovalFunction
}

export type TransactionsComponent = FunctionComponent<TransactionsProps>
export type TransactionPaneComponent = FunctionComponent<TransactionPaneProps>