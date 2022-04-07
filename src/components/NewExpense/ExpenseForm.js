import React, { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [date, setDate] = useState("")

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const priceChangeHandler = (event) => {
    setPrice(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let new_expense = {
      'id': Math.random(),
      'title': title,
      'price': price,
      'date': new Date(date)
    }
    props.createNewExpense(new_expense)
    setDate("")
    setPrice("")
    setTitle("")
  }

  return (
    <form onSubmit={onSubmitHandler}>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' onChange={priceChangeHandler} value={price} min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} value={date} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Submit Expense</button>
      </div>

    </form>
  )
}

export default ExpenseForm