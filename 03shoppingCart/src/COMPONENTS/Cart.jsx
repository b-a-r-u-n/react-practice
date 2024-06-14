import { useState } from 'react';
import React, {useEffect} from 'react';
import img1 from '../IMAGES/img1.jpg';

const Cart = ({cart , removeItem , countHandling}) => {
    let [id , name , image , price , count] = cart;
    let [totalPrice, SetTotalPrice] = useState();
    const handalePrice = () => {
        let total = 0;
        cart.map((item) => {
            total += item.price * item.count;           
        });
        SetTotalPrice(total);
    }

    useEffect(() => {
        handalePrice();
    })

    return (
        <div className='py-[5vh] pt-[10vh] w-full flex flex-col items-center gap-y-[3vh]'>
            <h1 className='text-[3vw] font-medium'>Your Cart Items</h1>
            {
                cart.map((item) => {
                    return(
                        <div className='w-[35vw] px-[1vw] pr-[2vw] py-[2vh] border-2 border-black shadow-lg rounded-xl flex justify-between items-center'>
                            <div className='flex gap-x-[2vw]'>
                                <div className="h-[10vh] w-[8vw] bg-contain bg-no-repeat bg-center"
                                    style={{backgroundImage: `url(${item.image})`}}
                                ></div>
                                <div className='flex flex-col justify-between'>
                                    <h1 className='text-md font-bold'>{item.name}</h1>
                                    <p className='text-md font-bold'><span className='text-md font-bold'>$ </span >{item.price}</p>
                                    <div className='flex gap-2'>
                                        <button className='px-[0.5vw] bg-gray-500 rounded-md flex items-center justify-center'
                                            onClick={()=>{countHandling(item, -1)}}
                                        >
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <span>{item.count}</span>
                                        <button className='px-[0.5vw] bg-gray-500 rounded-md flex items-center justify-center'
                                            onClick={()=>{countHandling(item, 1)}}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-rose-400 px-[1vw] py-[2vh] rounded-full'
                                onClick={() => {removeItem(item)}}
                            >
                                <i className="fa-solid fa-trash text-red-600"></i>
                            </button>
                        </div>
                    )
                })
            }
            <div className='text-[2vw] font-semibold'>Total <span className='font-semibold text-red-600'>${totalPrice}</span></div>
        </div>
    )
}

export default Cart;