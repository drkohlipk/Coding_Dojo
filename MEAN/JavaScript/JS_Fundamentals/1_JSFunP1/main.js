const logArr = x => x.map(val => console.log(val));

const addHundo = x => x.push(100);

const combArr = (arr1, arr2) => arr1.push(...arr2);

const sumTo = num => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};

const findMin = arr => {
    let min = Number.POSITIVE_INFINITY;
    for (let val in arr) {
        if (arr[val] < min) {
            min = arr[val];
        }
    }
    return min;
};

const findAvg = arr => {
    let avg = arr[0];
    for (let i = 1; i < arr.length; i++) {
        avg += arr[i];
    }
    return avg/arr.length;
};

const printObj = obj => {
    for (let pair of obj.entries()) {
        console.log(`${pair[0]} = ${pair[1]}`);
    }
};

let x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
let y = ["hello", "world", "JavaScript is Fun"];
let arr = [1, 5, 90, 25, -3, 0];

let new_ninja = new Map([
 ['name', 'PJ'],
 ['profession', 'coder'],
 ['favorite_language', 'JavaScript'],
 ['dojo', 'Seattle']
]);

printObj(new_ninja);
