import React from 'react';

const Addedtask = ({item , removeTask}) => {
    return(
    <>
        <div className='mt-5 py-1 px-2 flex items-center justify-between shadow-md rounded-xl bg-blue-950'>
            <h1 className='text-white text-xl font-semibold capitalize'>{item}</h1>
            <button 
                onClick={() => {removeTask(item)}}
                className='bg-rose-300 text-red-600 py-1 px-2 rounded-full'>
                    <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    </>
        
    )
}

export default Addedtask;