
const Card = ({product , addToCart}) => {
    let {id , name , image , price} = product;
    return (
            <div className="background  sm:w-[22vw] w-[80%] h-[60vh]  overflow-hidden">
                <div className="image w-[100%] h-[60%] cursor-pointer"
                    style={{backgroundImage: `url(${image})`}}
                ></div>
                <div className=" flex h-[40%] flex-col py-[2vh] items-center justify-between">
                    <h2 className="text-md font-semibold">{name}</h2>
                    <p className="font-bold text-lg">Price: <span className="text-lg font-bold text-green-600">$ {price}</span></p>
                    <button className="py-[0.5vh] border-2 border-black px-[1vw] text-black font-bold outline-none rounded-md"
                        onClick={() => {addToCart(product)}}
                    >Add to Cart</button>
                </div>
            </div>
    )
}

export default Card;