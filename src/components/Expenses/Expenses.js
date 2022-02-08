import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import NewExpense from '../NewExpense';
import ExpenseFilter from './ExpenseFilter';


const Expenses=()=>{
    const [filteryear,filterChange] =useState('2020');

    const addFilter = value=>{
        filterChange(value);
        console.log(value);
    }
    let expenses = [
        {
            id: 1,
            title:"Samsung TV",
            amount:250.94,
            date:new Date(2021,5,12)
        },
        {
            id: 2,
            title: "Techno TV",
            amount: 33.94,
            date: new Date(2022, 11, 2)
        }
    ]

    const addExpenseHandler = expense=>{
        expenses.push(expense);
        console.log(expenses)
    }
    return (
        <Card className="md:w-8/12 w-full md:rounded-md bg-gray-800 p-2 md:mx-auto my-2">
            <NewExpense addFunc={addExpenseHandler}/>
            <ExpenseFilter selected={filteryear} onFilter={addFilter} />
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        </Card>
    );
}
export default Expenses;