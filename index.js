// const {listData, array} = require('./stack');
// import {ValidationError, json} from "./stack.js";
// import {order, rf, checkingStock, handleFirst, handleSec} from './async.js';
import {cekKesibukkan, cekStokKopi, membuatKopi, state} from './chaining_promise.js';
import {perantara, total, withLodas} from './nodePackage.js'

//functional programming
// let createNewArray = (arr, variabel) => {
//     return {...variabel, arr};
// }
// console.log(createNewArray('informatika', array));
// console.log(listData)

//handling error
// try{
//     let user = JSON.parse(json);
//     if(!user.prodi){
//         throw new ValidationError("'name' is required");
//     }
//     console.log(user.nama);
//     console.log(user.nim);
// }catch(error){
//     console.log(`message: ${error.message}`)
// }

//callback async
// order((ord) => {
//     console.log(ord)
// });

//promise
// const executor = () => {
//     return new Promise(rf);
// }

//promise consume
// checkingStock()
//     .then(handleFirst)
//     .catch(handleSec)

//chaining promise
// const pesanKeBarista = () => {
//     cekKesibukkan()
//         .then((value) => {
//             console.log(value)
//             return cekStokKopi()
//         })
//         .then((value) => {
//             console.log(value);
//             return membuatKopi()
//         })
//         .then((value) => {
//             console.log(value);
//             state.mesinSibuk= false
//         })
//         .catch((rejected) => {
//             console.log(rejected);
//             state.mesinSibuk=false;
//         })
// }
// pesanKeBarista()

//promises all
// const promises = [cekKesibukkan(), cekStokKopi(),membuatKopi()];
// Promise.all(promises)
//     .then(resolved => {
//         console.log(resolved);
//     })
//     .catch(rejected => {
//         console.log(rejected)
//     })

//gaya asyncronus pada syncronus
// const example = async () => {
//     try{
//         let cek = await cekStokKopi();
//         console.log(cek)
//     }catch(rejected){
//         console.log(rejected)
//     }
// }
// example()

//chaining dengan async await 
// const chain = async () => {
//     try{
//         await cekKesibukkan();
//         await cekStokKopi();
//         const create = await membuatKopi();
//         console.log(create);
//     }catch(rejected){
//         console.log(rejected)
//     }
// }
// chain()

//quiz
// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// console.log("Welcome!");

console.log(withLodas)