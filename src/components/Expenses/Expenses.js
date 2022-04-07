import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from './ExpensesChart';


const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState("2020")

  const chosenYearHandler = (year) => {
    setFilterYear(year)
  }

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter selectedYear={filterYear}
          getChosenYear={chosenYearHandler} />

        <ExpenseChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  )
}

export default Expenses