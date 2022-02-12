import React, { useState } from 'react';
import Card from "../UI/Card";

const ExpenseForm=(props)=>{
    const [enteredTitle,changeTitle]=useState('');
    const [enteredDate, changeDate] = useState('');
    const [enteredAmount, changeAmount] = useState('');
    


    const dateChanged = (event) => {
        changeDate(event.target.value)
    }

    const titlechanged =(event)=>{
        changeTitle(event.target.value);
    }
    const amountChanged =(event)=>{
        changeAmount(event.target.value);
    }

    const hideForm=()=>{
        props.toggle()
    }
    
    function submitHandler(event){
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSave(expenseData);
        changeDate('');
        changeAmount('');
        changeTitle('');
    }

    const updatechart=()=>{
        props.toggleChart();
    }

    if(!props.showform)
        return <div className='bg-gray-400 flex justify-center mb-4 items-center p-6'>
            <button className='bg-gray-300 btn text-gray-800 active:text-gray-100 px-4 py-2' onClick={hideForm}>Add Expense</button>
            <button className='bg-green-300 btn text-green-800 active:text-gray-100 px-4 py-2' onClick={updatechart}>View Report</button>
        </div>

    return (
        <form onSubmit={submitHandler}>
            <Card className="bg-gray-400 box-border mb-4 p-2">
                <div className="grid grid-cols-2 gap-4">
                    <div id='title' className="flex flex-col gap-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder='Title' value={enteredTitle} onChange={titlechanged} className="h-8 p-2 rounded" name='title' />
                    </div>
                    <div id='amount' className="flex flex-col gap-2">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" placeholder='Amount' value={enteredAmount} onChange={amountChanged} className="h-8 p-2 rounded" min={0.01} step={0.01} name='amount' />
                    </div>
                    <div id='date' className="flex flex-col gap-2">
                        <label htmlFor="date">Date</label>
                        <input type="date" value={enteredDate} onChange={dateChanged} className="h-8 p-2 rounded" name='date' min="2019-01-01" max="2022-01-01" />
                    </div>
                </div>
                <div id='footer' className="flex justify-end">
                    <span onClick={hideForm} className="btn cursor-pointer box-border bg-red-700 hover:bg-red-600 transition-all uppercase text-sm font-bold text-gray-100 rounded">Close</span>
                    <button type='submit' className="btn box-border bg-fuchsia-700 hover:bg-fuchsia-600 transition-all uppercase text-sm font-bold text-gray-100 rounded"> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>&nbsp;Add Expenses</button>
                </div>
            </Card>
        </form>

        
    );
}

export default ExpenseForm;