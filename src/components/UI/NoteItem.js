//import React, { useState } from 'react';

function NoteItem() {

    //const [display,displayFunction] = useState(true);

    return (
        <div className="bg-gray-300 w-3/12 h-48 m-2">
            <div className='flex'>
                <div className='flex-1'></div>
                <div className='flex text-sm p-2 gap-2 text-blue-800 font-sm'>
                    <a href="#">Delete</a>
                    <a href="#">Edit</a>
                    <a href="#">Save</a> 
                </div>
            </div>
        </div>
    );
}

export default NoteItem;