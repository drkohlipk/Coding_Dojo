const runningLogger = () => console.log('I am running!');

const multiplyByTen = n => n * 10;

const stringReturnOne = () => "Hey yo, I'm the first string returned!";

const stringReturnTwo = () => "Awww man...I'm number two...";

const caller = func => {
    try {
        func();
    } catch(e) {}
};

const myDoubleConsoleLog = (func1 = stringReturnOne, func2 = stringReturnTwo) => {
    if (typeof func1 == 'function') {
        console.log(func1());
    }
    if (typeof func2 == 'function') {
        console.log(func2());
    }
};

const caller2 = func => {
    console.log('starting...');
    setTimeout(() => {
        try {
            func();
        } catch(e) {}
    }, 2000);
    console.log('ending?');
    return 'interesting';
};

caller2(5);
