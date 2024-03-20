// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
const result = saturdayFun("bath my dog");
 //monday work
function mondayWork(task = "go to the office"){
    return `This Monday, I will ${task}.`;
}
const mondayWorkResult = mondayWork("work from home.");

function wrapAdjective(symbol){
    return function(adjective){
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}