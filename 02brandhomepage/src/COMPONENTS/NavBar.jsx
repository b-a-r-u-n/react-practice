import React from 'react';
import logo from '../IMAGES/logo1.png'

const NavBar = () => {
    return(
        <nav className="nav h-16 px-20 bg-slate-500 flex justify-between items-center">
            <div className='h-14 w-28 bg-cover'
                style={{backgroundImage: `url(${logo})`}}
            ></div>
            <div>
                <ul className='flex items-center gap-4 font-medium'>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div>
                <button className='bg-red-600 text-white px-4 py-1 border-none outline-none rounded-md shadow-xl'>Log In</button>
            </div>
        </nav>
    )
}

export default NavBar