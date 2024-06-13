import React from 'react';
import Data from '../COMPONENTS/Data'
import Card from '../COMPONENTS/Card'
import img from '../IMAGES/background.jpg'

const  CardFrame = ({addToCart}) => {
    return(
        <div className='hero px-[10vw] pt-[15vh] pb-[5vh] bg-fixed'
            // style={{backgroundImage: `url(${img})`}}
        >
            <h1 className='text-center text-[4vw] font-bold mb-[5vh]'>Welcome Back</h1>
            <div className='flex justify-between flex-wrap gap-y-[5vh]'>
            {
                Data.map( (product)=> {
                    return (
                        <Card key={product.id} product={product} addToCart={addToCart}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CardFrame;