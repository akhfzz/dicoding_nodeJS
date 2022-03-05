import _ from 'lodash';

//looping biasa
const array = [4,6,7,8,9];
let perantara = 0;
for(let i=0; i< array.length; i++){
    perantara += array[i];
}

//reduce
let total = array.reduce((prev, next) => {
    return prev + next
})

// let withLodas = _.sum(array);
let withLodas = _.partition(array, n => n % 2);

export {perantara, total, withLodas};