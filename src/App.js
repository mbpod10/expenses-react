import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import data from './data'

function App() {

  const [data2, setData] = useState(data)

  const createNewExpenseParent = (expense) => {
    console.log(expense)
    setData([...data2, expense])
  }

  return (
    <div>
      <NewExpense createNewExpenseParent={createNewExpenseParent} />
      <Expenses data={data2} />
    </div>
  );
}

export default App;
