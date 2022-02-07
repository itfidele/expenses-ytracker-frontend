import React,{ useState } from 'react';


const ExpenseFilter =(props)=>{

    const dropdownChanged=(event)=>{
        props.onFilter(event.target.value)
    }

    return (
        <div>
            <select selected={props.selected} onChange={dropdownChanged}>
                <option value="2020">2019</option>
                <option value="2020">2020</option>
                <option value="2020">2021</option>
                <option value="2020">2022</option>
                
            </select>
        </div>
    );
}

export default ExpenseFilter;