import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [email,setEmail] = useState('');

  const emailRef = useRef(null);

  const emailGenerate = useCallback(() => {
    let tempEmail = '';
    let domain = ['gmail.com' , 'yahoo.com' , 'hotmail.com']
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isCharacter){
      str += "<>?/+_=-#$%^&*()";
    }
    if(isNumber){
      str += "1234567890";
    }
    
    for(let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char);
      tempEmail += str.charAt(char);
      // console.log(tempEmail);
    }
    tempEmail += "@gmail.com"

    setEmail(tempEmail);

  },[length,isNumber,isCharacter])

  useEffect(() => {
    emailGenerate();
  }, [length,isNumber,isCharacter])

  const copyToClipBoard = () => {
    console.log("Hello");
    emailRef.current?.select();
    window.navigator.clipboard.writeText(email);
  }

  return (
    <div className='h-screen bg-black  flex justify-center'>
      <div className='min-h-16 text-white text-center mt-10 '>
        <div className=' bg-gray-600  px-8 py-7 border border-white rounded-xl flex flex-col gap-5'>
          <h1 className='text-2xl '>Email Generator</h1>
          <div className='flex justify-center'>
            <input type="text" value={email}  readOnly ref={emailRef}
              className='pl-4 h-8 text-black font-semibold border-none outline-none rounded-tl-xl rounded-bl-xl sm:w-5/6'
            />
            <button onClick={copyToClipBoard}
              className='bg-green-700 px-1 rounded-tr-xl rounded-br-xl'>
              Copy
            </button>
          </div>
          <div className='flex flex-col justify-start items-start gap-4 sm:flex-row sm:items-center sm:gap-8'>
            <input type="range" min={8} max={18} value={length} onChange={(e) => setLength(e.target.value)}/>
            <label htmlFor="">Length : {length}</label>
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" onChange={() => setIsNumber(!isNumber)}/>
              <label htmlFor="">Numbers</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" onChange={() => setIsCharacter(!isCharacter)}/>
              <label htmlFor="">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
