import React from 'react';
import Logo from '../IMAGES/logo.png'

const Nav = ({item , SetShow}) => {
    return(
        <nav className='bg-black w-full px-[5vw] h-[10vh] flex items-center justify-between fixed z-10'>
            <div className="logo h-[8vh] w-[5vw] bg-contain bg-no-repeat bg-center cursor-pointer"
                style={{backgroundImage: `url(${Logo})`}}
                onClick={() => {SetShow(true)}}
            >
            </div>
            <div className='flex items-center'>
                <input type="text" name="" id="" placeholder='Search' className='pl-2 h-[4vh] border-none outline-none rounded-l-lg'/>
                <button className='flex items-center justify-center'>
                    <i className="fa-solid fa-magnifying-glass flex items-center justify-center h-[4vh] text-gray-500 bg-white px-2 py-1 rounded-r-lg"></i>
                </button>
            </div>
            <div>
                <button
                    onClick={() => {SetShow(false)}}
                >
                    <i className="fa-solid fa-cart-shopping text-gray-50 text-[2vw]"></i><span className='text-white px-1 bg-red-600 rounded-full'>{item}</span>
                </button>
            </div>
        </nav>
    )
}

export default Nav