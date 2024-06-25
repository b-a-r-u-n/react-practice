import React, {useState} from 'react';

const Home = ({addTask}) => {
  const [name , SetName] = useState("");
    return(
    <>
      <div className='flex items-center justify-center'>
      <input type="text" value={name} placeholder='Enter Task' className='h-8 px-4 outline-none border-none rounded-bl-2xl rounded-tl-2xl text-lg'
        onChange={(e) => {SetName(e.target.value)}}
      />
      <button 
        onClick={() => {
          addTask(name);
          SetName('');
        }}
        className='h-8 px-4 bg-blue-800 text-white font-semibold rounded-tr-2xl rounded-br-2xl'
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
    <h1 className='mt-5 text-2xl font-bold text-black'>Today's Tasks</h1>
    </>
    
    )
}

export default Home;