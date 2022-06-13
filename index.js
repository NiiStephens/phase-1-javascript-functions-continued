// code your solution here
function saturdayFun(activity='roller-skate'){
        return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog')

function mondayWork(activty = 'go to the office'){
    return (`This Monday, I will ${activty}.`)
}
mondayWork('work from home')


function wrapAdjective(result = '*') { 
    // let emphatic = 'You are'
    return function (inner = "handsome"){
       return  `You are ${result}${inner}${result}!`
    }
}

    // return function (result = '*') {
    //    
