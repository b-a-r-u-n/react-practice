import React from 'react'

const inputBox = ({label,currencyOptions = [], selectCurrency, isDisabled, amount, onAmountChange, onCurrencyChange}) => {
  return (
    <div className='bg-white px-4 py-3 rounded-lg flex flex-col gap-5 text-xl w-[30vw]'>
      <div className='flex justify-between'>
        <h1 className='text-gray-500 font-bold'>{label}</h1>
        <h1 className='text-gray-500 font-semibold'>Currency Type</h1>
      </div>
      <div className='flex justify-between'>
        <input type="number" placeholder="0" disabled={isDisabled}
          value={amount}
          onChange={(e) => onAmountChange && Number(onAmountChange(e.target.value))}
          className='border border-black rounded-lg outline-none px-3 w-[10vw]'
        />
        <select name="" id="" 
          onChange={(e) => onCurrencyChange && Number(onCurrencyChange(e.target.value))}
          value={selectCurrency}
          className='bg-gray-700 rounded-xl text-lg text-white font-bold cursor-pointer'>
            {
              currencyOptions.map((option) => {
                return (
                  <option keys={option} value={option}>{option}</option>
                )
              })
            }
        </select>
      </div>
    </div>
  )
}

export default inputBox
