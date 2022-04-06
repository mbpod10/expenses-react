import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const createNewExpense = (expense) => {
    // console.log(expense)
    props.createNewExpenseParent(expense)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm createNewExpense={createNewExpense} />
    </div>
  )
}

export default NewExpense