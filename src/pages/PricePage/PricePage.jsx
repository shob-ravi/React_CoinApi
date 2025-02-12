import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export default function PricePage()
{
    const [coin,setCoin] = useState(null);
    const {symbol} = useParams();

    useEffect(() => {
        async function getCoin() {
            try {
                const apiKey = import.meta.env.VITE_API_KEY;
                const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
                const response = await fetch(url)
                const data = await response.json();
                console.log('data'+JSON.stringify(data));
                setCoin(data);

            } catch (error) {
                console.error(error)                
            }
        }
        getCoin();
    }, [])
    function loaded(){
        return(
            <div>
            <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
            <h2>{coin.rate}</h2>
        </div>
        )        
    }
function loading(){
    return <h1>Loading...</h1>
}
return (
    coin ? loaded() :loading()
);
}