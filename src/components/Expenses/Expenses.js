import React, { useState } from 'react'

import Card from '../UI/Card';
import NewExpense from '../NewExpense';
import ExpenseFilter from './ExpenseFilter';
import ExpenseLists from './ExpenseLists'
import Charts from '../Chart/Chart';


const Expenses=()=>{
    const [filteryear,filterChange] =useState('');
    const [showform,updateShowForm] = useState(false);


    const toggleShowForm=()=>{
        updateShowForm(!showform);
    }
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

    const [showChart,chartUpdate] = useState(false);

    const updateC=()=>{
        chartUpdate(!showChart);
    }

    const addExpenseHandler = expense=>{
        updateExpenses(prevExpenses=>[expense,...prevExpenses]);
    }

    const filteredExpenses = expenses.filter(expense=>{
        return expense.date.getFullYear().toString() === filteryear || filteryear === "";
    });
    return (
        <div>
            
            <NewExpense toogleChart={updateC} addFunc={addExpenseHandler} showform={showform} toggle={toggleShowForm} />
            <Charts show={showChart} expenses={filteredExpenses}/>
            <Card className="md:w-8/12 w-full md:rounded-md bg-gray-800 p-2 md:mx-auto my-2">

                <ExpenseFilter selected={filteryear} onFilter={addFilter} />
                <ExpenseLists expenses={filteredExpenses} filteryear={filteryear} />


            </Card>
        </div>
    );
}
export default Expenses;