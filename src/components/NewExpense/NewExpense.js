import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const createNewExpense = (expense) => {
    // comes from props from App.js
    props.createNewExpenseParent(expense)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm createNewExpense={createNewExpense} />
    </div>
  )
}

export default NewExpense