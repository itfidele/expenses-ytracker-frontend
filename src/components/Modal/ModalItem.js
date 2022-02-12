import React, { useState } from 'react';

function ModalItem(props) {

    const [display,displayFunction] = useState(true);

    const toggleClose=()=>{
        displayFunction(!display);
    }

    return (
        <div className='w-full flex h-screen absolute top-0 justify-center items-center bg-black bg-opacity-70 z-50'>
            <div className="w-full md:w-6/12  bg-gray-200 rounded-lg mx-2">
                <div id='title' className="flex items-center border-b-2 border-gray-300">
                    <div className="flex-1 mx-2">Report</div>
                    <div onClick={toggleClose} class='cursor-pointer bg-red-500 font-bold py-2 px-4 transition-all hover:bg-red-600 hover:text-gray-200'>X</div>
                </div>
                <div id='content' className="m-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ModalItem;