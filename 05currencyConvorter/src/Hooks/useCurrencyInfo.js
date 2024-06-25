import React, { useState, useEffect } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    },[currency])

    const fetchData = async () => {
        let responce = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        let convertedJson = await responce.json();
        // console.log(convertedJson[currency]);
        setData(convertedJson[currency]);
    }
    return data;
}

export default useCurrencyInfo
