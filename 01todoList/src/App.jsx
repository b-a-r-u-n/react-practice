import React from 'react';
import { useState } from 'react';
import './index.css';
import bg1 from './IMAGE/bg1.jpg';
import Addedtask from './Components/Addedtask';
import Home from './Components/Home';

function App() {

  const [tasks , SetTasks] = useState([]);

  const addTask = (name) => {
    if(name === "")
      return;
    tasks.forEach((task) => {
      if(task === name)
        return;
    })
    SetTasks([...tasks ,name]);
  }

  const removeTask = (removeItem) => {
    let newarr = tasks.filter((task) => {
      if(task != removeItem){
        return task;
      }
    })
    SetTasks(newarr);
  }

  return (
      <div 
        style={{backgroundImage: `url(${bg1})`}}   

        // style={{backgroundColor: "black"}}
        className='h-screen w-full flex justify-center overflow-scroll'>
        <div className='h-min my-10 py-4 px-8 bg-gray-400 rounded-2xl '>
          <Home addTask={addTask}/>
          {
            tasks.map((item, index) => {
              return(
                <Addedtask key={index} item={item} removeTask={removeTask}/>
              )
            })
          }
         </div>
         
      </div>
  )
}

export default App
