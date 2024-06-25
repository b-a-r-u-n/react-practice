import { useState } from 'react';
import { useCallback } from 'react';
import Nav from './COMPONENTS/Nav';
import './index.css';
import CardFrame from './COMPONENTS/CardFrame'
import Cart from './COMPONENTS/Cart'
import Data from './COMPONENTS/Data'

function App() {

  const [cart , SetCart] = useState([]);
  const [show , SetShow] = useState(true);
  const [data , SetData] = useState(Data);

  const addToCart = (item) => {
    // console.log(item);
    let isPresent = false;
    cart.forEach((present) => {
      if(present.id == item.id)
        isPresent = true;
    })
    if(isPresent == true)
      return;
    SetCart([...cart,item]);
    // console.log(cart);
  }

  const countHandling = (item , num) => {
    let idx = 0;
    cart.forEach((present,index) => {
      if(present.id == item.id)
        idx = index;
    })
    let arr = cart;
    arr[idx].count += num;
    console.log(arr[idx].count);
    
    SetCart([...arr]);
    if(arr[idx].count <= 0){
      removeItem(item);
    }

    if(arr[idx].count > 10){
      arr[idx].count = 10;
    }

    
  }

  const removeItem = (item) => {
    let arr = cart.filter((present) => {
      if(present.id != item.id)
        return present;
    })
    SetCart([...arr]);
  }

  // const getInput = useCallback((input) => {
  //   input = input.toLowerCase();
  //   console.log(input);
  //   let arr = Data.map((item) => {
  //     console.log("Hello");
  //     console.log(item.name.toLowerCase());
  //     return item.name.toLowerCase().includes(input);
  //   })
  //   console.log(arr);
  // })

  const getInput = ((input) => {
    input = input.toLowerCase();
    let arr = Data.filter((item) => {
      return item.name.toLowerCase().includes(input);
    })
    console.log(arr);
    SetData([...arr]);
  })


  return (
    <>
      <Nav item={cart.length} SetShow={SetShow} getInput={getInput}/>
      {
        show ?  <CardFrame data={data} addToCart={addToCart}/> : <Cart key={cart.id} cart={cart} removeItem={removeItem} countHandling={countHandling}/>
      }
     
    </>
  )
}

export default App
