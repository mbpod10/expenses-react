import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {

  const expenseArray = props.data.map((element) => {
    return (
      <ExpenseItem key={element.id} data={element} />
    )
  })

  return (
    <Card className="expenses">{expenseArray} </Card>
  )
}

export default Expenses