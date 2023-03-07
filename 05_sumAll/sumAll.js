const sumAll = function(start,end) {
    let sum = 0;
    if(typeof(start) != 'number' || typeof(end) != 'number'){
        return "ERROR"
    }
    if(start < 0 || end < 0){
        return "ERROR"
    }
    for (let index = Math.min(start,end); index < Math.max(start,end)+1; index++) {
        sum+=index

        
        
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
