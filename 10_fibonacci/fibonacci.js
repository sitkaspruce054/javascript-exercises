const fibonacci = function(num_int) {
    
    if (num_int < 1){
        return "OOPS"
    }
    if(num_int == 1){
        return 1
    }
    if(num_int == 2){
        return 1
    }
    else{
        return fibonacci(num_int-1) + fibonacci(num_int-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
