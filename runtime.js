const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;
}


function doublerInsert(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;
}


function getSizedArray(size){
    let array = [];
    for (let i = 0; i < size; i++){
        array.push(i);
    }
    return array;
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendTa = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsertTa = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendSa = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsertSa = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendMa = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsertMa = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendLa = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsertLa = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendXla = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertXla = perf.stop();


console.log('Results for the tinyArray');
console.log("unshift", resultsInsertTa.preciseWords);
console.log("push", resultsAppendTa.preciseWords);

console.log('Results for the smallArray');
console.log("unshift", resultsInsertSa.preciseWords);
console.log("push", resultsAppendSa.preciseWords);

console.log('Results for the mediumArray');
console.log("unshift", resultsInsertMa.preciseWords);
console.log("push", resultsAppendMa.preciseWords);

console.log('Results for the largeArray');
console.log("unshift", resultsInsertLa.preciseWords);
console.log("push", resultsAppendLa.preciseWords);

console.log('Results for the extraLargeArray');
console.log("unshift", resultsInsertXla.preciseWords);
console.log("push", resultsAppendXla.preciseWords);
