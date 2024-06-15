import React, { useRef, useState } from 'react';
import Logo from '../IMAGES/logo.png'

const Nav = ({item , SetShow , getInput}) => {
    const [inputValue , SetInputValue] = useState('');
    return(
        <nav className='bg-black w-full px-[5vw] h-[10vh] flex items-center justify-between fixed z-10'>
            <div className="logo sm:h-[8vh] sm:w-[5vw] bg-contain bg-no-repeat bg-center cursor-pointer h-[6vh] w-[15vw]"
                style={{backgroundImage: `url(${Logo})`}}
                onClick={() => {SetShow(true)}}
            >
            </div>
            <div className='flex items-center'>
                <input type="text" name="" id="" value={inputValue} placeholder='Search' 
                    className='pl-2 h-[4vh] border-none outline-none rounded-l-lg hidden sm:inline-block'
                    onChange={(e) => {SetInputValue(e.target.value)}}
                />
                <button className='flex items-center justify-center hidden sm:inline-block'
                    onClick={() => {getInput(inputValue)}}
                >
                    <i className="fa-solid fa-magnifying-glass flex items-center justify-center h-[4vh] text-gray-500 bg-white px-2 py-1 rounded-r-lg"></i>
                </button>
            </div>
            <div>
                <button
                    onClick={() => {SetShow(false)}}
                >
                    <i className="fa-solid fa-cart-shopping text-gray-50 sm:text-[2vw] text-xl"></i><span className='text-white px-1 bg-red-600 rounded-full'>{item}</span>
                </button>
            </div>
        </nav>
    )
}

export default Nav