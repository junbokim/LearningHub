const delayedBackgroundColor = (color,delay) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve()
        },delay);
    })
}



async function rainbow(){
    await delayedBackgroundColor("red",1000);
    await delayedBackgroundColor("orange",1000);
    await delayedBackgroundColor("yellow",1000);
}

// delayedBackgroundColor("red",1000)
// .then(()=>{await delayedBackgroundColor("orange",1000)})
// .then(()=>await delayedBackgroundColor("yellow",1000))
// .then(()=>await delayedBackgroundColor("green",1000))
// .then(()=>await delayedBackgroundColor("blue",1000))
// .then(()=>await delayedBackgroundColor("purple",1000))