function isNum(char) {
    return char >= '0' && char <= '9';
}

function reverseNumber(num) {
    num = '' + num;
    let str = num.split('');
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (!isNum(str[i])) {
            ++i;
        }
        if (!isNum(str[j])) {
            --j;
        }
        if (isNum(str[i]) && isNum(str[j])) {
            let tempChar = str[i];
            str[i] = str[j];
            str[j] = tempChar;
            ++i;
            --j;
        }
    }
    return str.join('');
}

//console.log(reverseNumber(-2431231231));

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        func(el);
    }
}

//forEach([2,5,8], function(el) { console.log(el) })

function map(arr, func) {
    let transformedArray = [];
    forEach(arr, function (el) {
        transformedArray.push(func(el));
    });
    return transformedArray;
}

//map([2, 5, 8], function(el) { console.log( el + 3) });
//map([1, 2, 3, 4, 5], function (el) { console.log( el * 2) })

function filter(arr, func) {
    let filteredArray = [];
    forEach(arr, function (el) {
        if (func(el)) {
            filteredArray.push(el);
        }
    });
    return filteredArray;
}

//console.log(filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 } )) 
//console.log(filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 }))

function getAdultAppleLovers(data) {
    return map(filter(data, (el) => el.age > 18 && el.favoriteFruit === 'apple'), (el) => el.name);
}

//getAdultAppleLovers(data)

function getKeys(obj) {
    let arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}

//console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}))

function getValues(obj) {
    let arr = [];
    for (let el in obj) {
        if (obj.hasOwnProperty(el)) {
            arr.push(obj[el]);
        }
    }
    return arr;
}

//console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}))

function showFormattedDate(date) {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}

//console.log(showFormattedDate(new Date('2018-08-27T01:10:00')))

