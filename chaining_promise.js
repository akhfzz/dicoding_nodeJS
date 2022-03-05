const state = {
    stock: {
        jumlahKopi: 60,
        gula: 35
    },
    mesinSibuk: false
}

const cekKesibukkan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.mesinSibuk){
                resolve("Mesin siap membuat kopi");
            }else{
                reject("Mesin masih sibuk melayani");
            }
        }, 1000);
    })
}
const cekStokKopi = () => {
    return new Promise((resolve, reject) => {
        state.mesinSibuk = true;
        setTimeout(() => {
            if(state.stock.jumlahKopi >= 45 && state.stock.gula >= 30){
                resolve("Barang ketersediaan lengkap");
            }else{
                reject("Barang habis alias kosong");
            }
        }, 1500);
    })
}
const membuatKopi = () => {
    return new Promise((resolve, reject) => {
        console.log("Proses pembuatan...");
        setTimeout(() => {
            resolve("Kopi sudah jadi...");
        }, 2000);
    })
}
export {cekKesibukkan, cekStokKopi, membuatKopi, state}