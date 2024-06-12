import React from 'react';
import img1 from '../IMAGES/hero.jpg';
import img2 from '../IMAGES/ToyotaLogo.png';

const Hero = () => {
    return(
        <div className='px-32 py-10 flex'>
            <div className="left  w-3/5">
                <h1 className='hero-title text-9xl font-bold uppercase .bg-clip-text'>Your drive <br />deserve <br />the best</h1>
                <p className='text-xl py-6 uppercase font-semibold w-10/12'>Your drive deserves the best, and we're here to help with the Toyota Supra MK4.Experience legendary design and performance. </p>
                <div className='flex gap-x-10'>
                    <button className='bg-red-600 px-3 py-1 border-none outline-none rounded-md text-white font-medium'
                        onClick={() => {
                            window.open('https://www.toyota.com/grsupra/' , "_blank");
                        }}
                    >Shop Now</button>
                    <button className='px-3 py-1 bg-transparent border-2 border-gray-500 rounded-md font-semibold'>Category</button>
                </div>
                <p className='py-6 font-semibold'>Available On</p>
                <div>
                    <button className="img1 h-10 w-32 bg-contain"
                        style={{backgroundImage: `url(${img2})`}}
                        onClick={() => {
                            window.open('https://www.toyota.com/grsupra/' , "_blank");
                        }}
                    ></button>
                </div>
            </div>
            <div className="right w-2/5">
            <div className="hero h-full w-full bg-cover bg-center bg-no-repeat rounded-3xl"
                    style={{backgroundImage: `url(${img1})`}}
                ></div>
            </div>
        </div>
    )
}

export default Hero;