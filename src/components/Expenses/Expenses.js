import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import NewExpense from '../NewExpense';
import ExpenseFilter from './ExpenseFilter';
import ExpenseLists from './ExpenseLists'


const Expenses=()=>{
    const [filteryear,filterChange] =useState('');

    const addFilter = value=>{
        filterChange(value);
        
    }
    const dummy_expenses = [
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
    const [expenses,updateExpenses] = useState(dummy_expenses);

    const addExpenseHandler = expense=>{
        updateExpenses(prevExpenses=>[expense,...prevExpenses]);
    }

    const filteredExpenses = expenses.filter(expense=>{
        return expense.date.getFullYear().toString() === filteryear || filteryear === "";
    });
    return (
        <Card className="md:w-8/12 w-full md:rounded-md bg-gray-800 p-2 md:mx-auto my-2">
            <NewExpense addFunc={addExpenseHandler}/>
            <ExpenseFilter selected={filteryear} onFilter={addFilter} />
            <ExpenseLists expenses={filteredExpenses} filteryear={filteryear}/>
            
            
        </Card>
    );
}
export default Expenses;