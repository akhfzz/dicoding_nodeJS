//callback basic
const order = (callback) => {
    let coffe = null;
    console.log("selamat menunggu")
    setTimeout(()=> {
        coffe = "kopi latte";
        callback(coffe)
    }, 3000)
}

//promise basic
const test = () => {
    return 'kopi berhasil dibuat';
}

const rf = (resolve, reject) => {
    const kopiReady = true;
    if(kopiReady){
        resolve(test());
    }else{
        reject("Yah kopi habis")
    }
}

//promise consume
const stock = {
    bijiKopi: 100,
    gula: 20
};
const checkingStock = () => {
    return new Promise((resolve, reject) => {
        if(stock.bijiKopi >= 80 && stock.gula >=26){
            resolve("Persediaan cukup bos");
        }else{
            reject("Maaf persediaan habis");
        } 
    })
}
const handleFirst= (resolveValue) => {
    console.log(resolveValue);
}
const handleSec=(rejectReason)  => {
    console.log(rejectReason);
}

export {order, rf, checkingStock, handleFirst, handleSec}