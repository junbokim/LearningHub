// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {return res.json()})
// .then(res=>{console.log(res.ticker.price)})
// .catch(e =>{
//     console.log("error");
// })

const getBitcoinPricePromise = async ()=>{
    try{
        let res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        let responceJson = await res.json();
        console.log(responceJson.ticker.price);
    }
    catch(e){
        console.log("Error",e)
    }
}

// Axios
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res=>{
//     console.log(res.data.ticker.price);
// })
// .catch(err=>{
//     console.log("error!",err);
// })

const getBitcoinPriceAxios = async ()=>{
    try{
        let res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price);
    }
    catch(e){
        console.log("Error",e)
    }
}

//Axios Config

const configAxios = async ()=>{
    try{
        let config = {headers: {Accept:'application/json'}}
        let res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data.joke)
    }
    catch(e){
        console.log("Oh No!!");
    }
}