import React from 'react';
import Card from '../COMPONENTS/Card'
import img from '../IMAGES/background.jpg'

const  CardFrame = ({data , addToCart}) => {
    return(
        <div className='hero px-[10vw] pt-[15vh] pb-[5vh]'
            // style={{backgroundImage: `url(${img})`}}
        >
            <h1 className='text-center sm:text-[4vw] font-bold mb-[5vh] text-[10vw]'>Welcome Back</h1>
            <div className='flex sm:flex-row sm:justify-between flex-wrap gap-y-[5vh] flex-col items-center'>
            {
                data.map( (product)=> {
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