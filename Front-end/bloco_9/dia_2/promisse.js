const arrRandom = (arr, index) => {
    let i = 0;
    while( i < index){
        let result = Math.floor(Math.random() * 50 + 1);
        arr.push(result);
        i++;
    }
    return arr;
}

const funcDiv = (total) => {
    const arr = [ 2, 3, 5, 10];
    return arr.map((index) => (Math.ceil(total / index)));
}
const sum = (arr) => arr.reduce((acc, current) => acc + current, 0);

const calcPromisse = () => {
    return new Promise((resolve, reject) => {
        const sumArr = arrRandom(array = [], 10)
        .map((element) => Math.pow(element, 2))
        .reduce((acc, curr) => acc + curr, 0);
        (sumArr < 8000) ? resolve(sumArr) : reject('É mais de oito mil!');
    })
    .then(funcDiv)
    .then((arr) => console.log(sum(arr)))
    .catch((mesageError) => console.log(mesageError));
}
console.log(calcPromisse());
