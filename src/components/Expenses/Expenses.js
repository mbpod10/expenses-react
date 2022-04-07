import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";


const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState("2020")

  const chosenYearHandler = (year) => {
    setFilterYear(year)
  }

  const expenseArray = props.data.map((element) => {
    return (
      <ExpenseItem key={element.id} data={element} />
    )
  })

  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter selectedYear={filterYear}
          getChosenYear={chosenYearHandler} />

        {expenseArray}
      </Card>
    </div>
  )
}

export default Expenses