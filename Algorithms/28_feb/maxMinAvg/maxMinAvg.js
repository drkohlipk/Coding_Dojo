const getMaxMinAvg = arr => {
    let maxMinAvg = {
        'Max': arr[0],
        'Min': arr[0],
        'Avg': arr[0]
    };

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxMinAvg.Max) {
            maxMinAvg.Max = arr[i];
        }
        if (arr[i] < maxMinAvg.Min) {
            maxMinAvg.Min = arr[i];
        }
        maxMinAvg.Avg += arr[i];
    }

    maxMinAvg.Avg /= arr.length;

    return maxMinAvg;
};

let inpArr = [5, 8, 2, 14, 25, 9];

console.log(getMaxMinAvg(inpArr));
