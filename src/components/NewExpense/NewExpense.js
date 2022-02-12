import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{

    const onSave=(expensesEntered)=>{
        const expensesData={
            ...expensesEntered,
            id:Math.random().toString(),
        }
        props.addFunc(expensesData);
    }
    return(
        <div>
            <ExpenseForm showform={props.showform} toggle={props.toggle} onSave={onSave}/>
        </div>
    );
}

export default NewExpense;