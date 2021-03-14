/* This piece of code demonstrates looping on all objects in array */

// let names = [ "Jaideep", "Jhumnu", "Jui", "Bablu" ];
// for (name of names) {
//     console.log("My name is " + name);
// }

//=====================================================================

/* This piece of code searches for a name in an array of names */
// function search(names, nameToFind) {
//     let result = { found : false, location : -1, nameToFind : null };

//     result.nameToFind = nameToFind;
//     for (i=0; i < names.length; ++i) {
//         if ( nameToFind === names[i] ) {
//             result.found = true;
//             result.location = i;
//             break;
//         }
//     }
//     return result;
// }

// function printResult(result) {
//     if ( result.found == true ) {
//         console.log("Found " + result.nameToFind + " at location " + result.location);
//     }
//     else {
//         console.log("Unable to find " + result.nameToFind + " in the array");
//     }
// }

// const names = [ "Jaideep", "Jhumnu", "Jui", "Bablu", "Martha", "Charlie", "Mike", "Edward", "Peter", "Ajit" ];
// let result = search(names, "Martha");
// printResult(result);

// result = search(names, "Santhana");
// printResult(result);

// result = search(names, "Jaideep");
// printResult(result);

// //=====================================================================

// /* This is a similar example where a function searches for a name in an array of names,
//  * but it has been written using a different for loop construct.
//  */
// function search(names, nameToFind) {
//     let result = { found : false, location : -1, nameToFind : null };

//     result.nameToFind = nameToFind;

//     let i=0;
//     for (name1 of names) {
//         if ( nameToFind === name1 ) {
//             result.found = true;
//             result.location = i;
//             break;
//         }
//         i++;
//     }
//     return result;
// }

// function printResult(result) {
//     if ( result.found == true ) {
//         console.log("Found " + result.nameToFind + " at location " + result.location);
//     }
//     else {
//         console.log("Unable to find " + result.nameToFind + " in the array");
//     }
// }

// const names = [ "Jaideep", "Jhumnu", "Jui", "Bablu", "Martha", "Charlie", "Mike", "Edward", "Peter", "Ajit" ];

// /* Also demonstrating how the ourput of one function can be directly fed into another */
// printResult( search(names, "Martha") );
// printResult( search(names, "Santhana") );
// printResult( search(names, "Jaideep")  );

//=====================================================================

// /* This piece of code demonstrates use of while loop */

// /**
//  * The function walks through all numbers from start to end, and prints out
//  * numbers that are multiples of the argument divisibleBy
//  * 
//  * @param {*} start The starting number to start testing
//  * @param {*} end The ending number to end testing
//  * @param {*} divisibleBy The number to be used to test for divisibility 
//  */
// function printMultiplesOf(start, end, divisibleBy) {
//     let i = start;
//     let found = false;
//     while ( i <= end ) {
//         if ( i % divisibleBy == 0 ) {
//             console.log(i + " is a multiple of " + divisibleBy);
//             found = true;
//         }
//         i++;
//     }
//     if ( !found ) {
//         console.log("Did not find any number between " + start + " and " + end + " that is divisible by " + divisibleBy);
//     }
// }

// // printMultiplesOf(1, 20, 5);
// // printMultiplesOf(7, 16, 3);
// // printMultiplesOf(16, 18, 5);

// // We should also try to break the code by flipping the start and end to see how it behaves
// printMultiplesOf(10, 1, 2);

//=====================================================================

function flipIt(arr, start, end) {
    if ( start < 0 || end >= arr.length ) {
        return arr;
    }
    for (i=start, j=end; i < j; ++i, --j) {
        swap(arr, i, j);
    }
    return arr;
}

function swap(arr, i, j) {
    temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
console.log("Before flipping", months);
flipIt(months, 0, 11);
console.log("After flipping", months);

//=====================================================================

