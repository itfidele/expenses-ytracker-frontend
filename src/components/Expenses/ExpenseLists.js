import ExpenseItem from "./ExpenseItem";

const ExpenseLists =(props)=>{

    if (props.expenses.length === 0)
        return <div className='uppercase font-bold text-gray-100 p-6 text-center text-2xl'>No Expenses Found </div> 
        
        
    return (
        <ul>
            {props.expenses.map(element => {
                return <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date} />
            })}
        </ul>
        
    );
}

export default ExpenseLists;