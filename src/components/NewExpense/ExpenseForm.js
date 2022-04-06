import React, { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0.01)
  const [date, setDate] = useState("mm/dd/yyyy")

  const titleChangeHandler = (event) => {
    console.log('title', event.target.value)
    setTitle(event.target.value)
  }
  const priceChangeHandler = (event) => {
    console.log('price', event.target.value)
    setPrice(event.target.value)
  }
  const dateChangeHandler = (event) => {
    console.log('date', event.target.value)
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
    setDate("mm/dd/yyyy")
    setPrice(0.01)
    setTitle("")
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title} />
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