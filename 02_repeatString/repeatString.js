const repeatString = function(string,num) {
    let sol = ""
    if(num < 0){
        return "ERROR"
    }
    for (let index = 0; index < num; index++) {
        sol = String(sol + string)
      
        
    }
    return sol
};

// Do not edit below this line
module.exports = repeatString;
