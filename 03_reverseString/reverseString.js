const reverseString = function(string) {
    let sol = ""
    if(string === ''){
        return sol
    }
    for (let index = string.length; index > 0 ; index--) {
        let letter = string.charAt(index-1);
        sol+=letter
        
    }
    return sol
};

// Do not edit below this line
module.exports = reverseString;
