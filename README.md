```jsx
import React, { useState } from 'react';

const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: ''
  })

// always use this when updating multiple states
const dateChangeHandler = () => {
  setUserInput((prevState) => {
       return { ...prevState, date: event.target.value }
     })
}
const titleChangeHandler = () => {
  setUserInput((prevState) => {
       return { ...prevState, title: event.target.value }
     })
}
const priceChangeHandler = () => {
  setUserInput((prevState) => {
       return { ...prevState, price: event.target.value }
     })
}
```