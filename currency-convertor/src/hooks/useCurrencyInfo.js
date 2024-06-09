import { useEffect, useState } from "react";
const useCurrencyInfo = (currency)=>{
    const [data, setCurrencyData] = useState({});
    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setCurrencyData(res[currency]));
    }, [currency]);
    return data;
}

export default useCurrencyInfo;