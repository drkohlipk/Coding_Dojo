function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length-1] = count;
    console.log(arr);
}

function keepLastFew(arr, Y) {
    var newArr = [];
    for (var i = arr.length-Y; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

function keepLastFewInPlace(arr, Y) {
    var j = 0;
    for (var i = Y-1; i < arr.length; i++) {
        arr[j] = arr[i];
        j++;
    }
    arr.length = Y;
    console.log(arr);
}

countPositives([-1,1,1,1]);
keepLastFew([2,4,6,8,10], 3);
keepLastFewInPlace([2,4,6,8,10], 3);
