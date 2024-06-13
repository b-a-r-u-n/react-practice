
const Card = ({product , addToCart}) => {
    let {id , name , image , price} = product;
    return (
            <div className="background  w-[22vw] h-[50vh]  overflow-hidden">
                <div className="image w-[100%] h-[60%] cursor-pointer"
                    style={{backgroundImage: `url(${image})`}}
                ></div>
                <div className="h-[40%] flex flex-col py-[2vh] items-center justify-between">
                <h2 className="text-[1.8vw]">{name}</h2>
                <p className="">Price: ${price}</p>
                <button className="py-[0.5vh] border-2 border-black px-[1vw] text-black font-medium outline-none rounded-md"
                    onClick={() => {addToCart(product)}}
                >Add to Cart</button>
                </div>
            </div>
    )
}

export default Card;