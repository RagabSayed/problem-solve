
let numberArray = [5, 3, 2, 0, 100, 151, -211, 'ragab', true, 142.5, 100, 151, 1004, 8, "1051", '1558as', 'as18']
// /////// returns a new array containing only the even numbers//////////
let dataEnter1 = document.querySelector(".data-enter1");
let opertBtn1 = document.querySelector(".opert-btn1");
let result1 = document.querySelector(".result1");
let saveRuslt1 =[];
dataEnter1.innerHTML = `Data Entered: [${numberArray}]`;
opertBtn1.addEventListener("click",function getEvenNumber() {
    saveRuslt1 = numberArray.filter(item => item % 2 == 0 );
    result1.innerHTML = `Result: [${saveRuslt1}]`;
})

// /////// returns the largest number in the array /////
let dataEnter2 = document.querySelector(".data-enter2");
let opertBtn2 = document.querySelector(".opert-btn2");
let result2 = document.querySelector(".result2");
let saveRuslt2 = 0;
dataEnter2.innerHTML = `Data Entered: [${numberArray}]`;
opertBtn2.addEventListener("click",function getLargestNumber() {
    let getNumber = numberArray.filter(item => !isNaN(item));
    saveRuslt2 = Math.max(...getNumber);
    result2.innerHTML = `Result: [${saveRuslt2}]`;
})

// /////////// returns the same string but reversed///////////////**
let text = 'returns the same string but reversed';
let dataEnter3 = document.querySelector(".data-enter3");
let opertBtn3 = document.querySelector(".opert-btn3");
let result3 = document.querySelector(".result3");
let reverseText = "";
dataEnter3.innerHTML = `Data Entered: [${text}]`;
opertBtn3.addEventListener("click",function getReverseText() {
    reverseText = text.split('').reverse().join('');
    result3.innerHTML = `Result: [${reverseText}]`;
})

// ////////// returns a new array without duplicate numbers //////////**
let numberArray4 = [0, 100, 151, -211, 'ragab', true, 'Ragab', 100, 151, 211, -211, 'ragab', true]
let dataEnter4 = document.querySelector(".data-enter4");
let opertBtn4 = document.querySelector(".opert-btn4");
let result4 = document.querySelector(".result4");
let saveRuslt4 = [];
dataEnter4.innerHTML = `Data Entered: [${numberArray4}]`;
opertBtn4.addEventListener("click",function getLargestNumber() {
    saveRuslt4 = numberArray4.reduce ((acc, cur) => {if (!acc.includes(cur)) {
        acc.push(cur);
    }
    return acc;
}, []);
    result4.innerHTML = `Result: [${saveRuslt4}]`;
})


