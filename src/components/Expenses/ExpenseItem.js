import Card from '../UI/Card';

const ExpenseItem=(props)=>{
    //let title=props.title;
    let amount=props.amount;
    let date=props.date;
    let month = date.toLocaleString('en-US', { month: 'long' })
    let day = date.toLocaleString('en-US', { month: '2-digit' })
    let year = date.getFullYear()
    const title= props.title;


    return (
        <li>
            <Card className="rounded-lg bg-gray-600 mx-2 my-4 flex justify-center items-center">
                <div className='py-2 px-4 border-2 select-none w-24 border-gray-100 bg-gray-800 m-2 text-center text-gray-200 rounded-lg text-sm font-medium'>
                    <div className="font-bold text-md">{month}</div>
                    <div>{year}</div>
                    <div className="text-2xl">{day}</div>
                </div>
                <div class='flex-1 flex p-2 justify-center items-center'>
                    <h2 className='flex-grow text-lg font-bold text-gray-100'>{title}</h2>
                    <div className='p-2 cursor-pointer bg-purple-700 border-2 border-gray-200 rounded-lg font-bold text-gray-200'>${amount}</div>
                </div>
            </Card>
        </li>   
    )
}

export default ExpenseItem;