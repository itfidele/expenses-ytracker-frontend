import React, { useState } from 'react';


function CounterItem({ index }) {

    const [counter,connterFunc] = useState(index);

    function onclick(index){
        connterFunc(index+1)
    }
    return (
        <div onClick={()=>onclick(counter)} className="bg-blue-500 active:border-4 active:border-red-600 active:ring-0 cursor-pointer hover:z-10 hover:ring-2 h-40 w-40 rounded-full text-center m-4 justify-center items-center flex">
            <div className="h-32 w-32 select-none bg-blue-700 rounded-full flex items-center justify-center text-6xl font-bold text-gray-100">{counter}</div>
        </div>
    )
}

export default CounterItem;