const expenses = [
  {
    'id': 1,
    'date': new Date(2021, 2, 28),
    'title': 'Car Wash',
    'price': 45.89
  },
  {
    'id': 2,
    'date': new Date(2021, 9, 3),
    'title': 'Dog Sitting',
    'price': 60.00
  },
  {
    'id': 3,
    'date': new Date(2021, 5, 13),
    'title': 'Training Lessons',
    'price': 48.00
  },
  // {
  //   'id': 4,
  //   'date': new Date(2021, 1, 10),
  //   'title': 'Insurance',
  //   'price': 150.00
  // },
  // {
  //   'id': 5,
  //   'date': new Date(2001, 6, 19),
  //   'title': 'Medical Expenses',
  //   'price': 114.00
  // },
  // {
  //   'id': 6,
  //   'date': new Date(2011, 8, 19),
  //   'title': 'Alcohol',
  //   'price': 23.50
  // },
]

const data = expenses.sort((element, index) => {
  return element.date + index.date
})

export default data