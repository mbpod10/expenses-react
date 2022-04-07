import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import data from './data'

const App = () => {

  const [data2, setData] = useState(data)

  const createNewExpenseParent = (expense) => {
    // sent down to NewExpense as prop
    setData((prevState) => {
      return [expense, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense createNewExpenseParent={createNewExpenseParent} />
      <Expenses data={data2} />
    </div>
  );
}

export default App;
