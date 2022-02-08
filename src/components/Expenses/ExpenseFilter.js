
const ExpenseFilter =(props)=>{

    const dropdownChanged=(event)=>{
        props.onFilter(event.target.value)
    }

    return (
        <div className="flex p-2 w-full justify-end">
            <select className="appearance-none h-8 w-24 text-center rounded-md" selected={props.selected} onChange={dropdownChanged}>
                <option value="">Filter</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;