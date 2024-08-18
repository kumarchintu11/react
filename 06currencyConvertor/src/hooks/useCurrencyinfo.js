// custom hooks: hooks created by a person.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        // get data from api (it will be ib string format, so convert it into json)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res => setData(res[currency])))
        

    }, [currency])
    // console.log(data); 
    
    return data
}

export default useCurrencyInfo;