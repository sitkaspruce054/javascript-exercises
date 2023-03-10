const removeFromArray = function(array, ... args) {
    sol = []
    for (let index = 0; index < array.length; index++) {
        if(!(args.includes(array[index]))){
            sol.push(array[index])
        }
        
    }
    return sol
};

// Do not edit below this line
module.exports = removeFromArray;
