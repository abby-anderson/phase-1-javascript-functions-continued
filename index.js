// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
        }


//should be able to just delete this try that's below, the above should be passing the lab! need to check tho
//    const innerFunction = function (adjective = "special") {
//         return `You are ${flair}${adjective}${flair}`;
//     }
//     return innerFunction(adjective);
}



//another example from talking thorugh with dex
//user orders drink first, then later orders their food 

// let orderMeal = (drink = "water") => {
//     return function(food = "bread") {
//         return `Here is your ${drink} and your ${food}!`
//     }
// }