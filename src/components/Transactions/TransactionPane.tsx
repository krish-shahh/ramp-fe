import { useCallback } from "react"
import { InputCheckbox } from "../InputCheckbox"
import { TransactionPaneComponent } from "./types"

export const TransactionPane: TransactionPaneComponent = ({
  transaction,
  loading,
  setTransactionApproval,
}) => {
  const handleCheckboxChange = useCallback(
    async (newValue: boolean) => {
      console.log('TransactionPane: handleCheckboxChange called', { transactionId: transaction.id, newValue });
      await setTransactionApproval({
        transactionId: transaction.id,
        newValue,
      })
    },
    [setTransactionApproval, transaction.id]
  )

  console.log('TransactionPane: Rendering', { transactionId: transaction.id, approved: transaction.approved });

  return (
    <div className="RampPane">
      <div className="RampPane--content">
        <p className="RampText">{transaction.merchant} </p>
        <b>{moneyFormatter.format(transaction.amount)}</b>
        <p className="RampText--hushed RampText--s">
          {transaction.employee.firstName} {transaction.employee.lastName} - {transaction.date}
        </p>
      </div>
      <InputCheckbox
        id={transaction.id}
        checked={transaction.approved}
        disabled={loading}
        onChange={handleCheckboxChange}
      />
    </div>
  )
}

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})