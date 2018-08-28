import React from 'react'


const getExpensesTotal = (expenses) => (

            expenses.reduce((prevExpense,expense) => prevExpense + expense.amount, 0)
);

export default getExpensesTotal;