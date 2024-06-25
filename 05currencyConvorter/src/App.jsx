import { useState } from "react";
import InputBox from "./Components/InputBox"
import useCurrencyInfo from "./Hooks/useCurrencyInfo"

function App() {

  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd"); 
  const [amount,setAmount] = useState();
  const [result,setResult] = useState(0);
  

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setResult(amount * currencyInfo[toCurrency]);
  }

  const swap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setAmount(result);
    setResult(amount);
  }

  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="bg-gray-700 px-5 py-8 rounded-xl">
          <InputBox 
            label="From"
            currencyOptions={options}
            selectCurrency={fromCurrency}
            isDisabled = {false}
            amount = {amount}
            onCurrencyChange = {(currency) => {
              setFromCurrency(currency);
            }}
            onAmountChange ={(amount) => {
              if(amount < 0) amount = 0;
              setAmount(amount);
            }}
          />
          <div className="flex justify-center">
            <button className="px-2 py-1 bg-blue-700 text-white rounded-lg" onClick={swap}>Swap</button>
          </div>
          <InputBox 
            label="To"
            currencyOptions={options}
            selectCurrency={toCurrency}
            isDisabled = {true}
            amount = {result}
            onCurrencyChange = {(currency) => {
              setToCurrency(currency);
            }}
          />
          <div className="flex justify-center">
          <button 
                onClick={convert}
                className='w-full bg-blue-700 text-white font-semibold mt-5 py-3 rounded-xl'
              >
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
