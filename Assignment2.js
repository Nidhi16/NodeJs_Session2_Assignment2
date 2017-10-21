// An outerFunc function which has outerParam parameter
var outerFunc = function(outerParam) {
    // A closure function which uses variable of outerFunc function
    var innerFunc = function(innerParam) {
        var result = outerParam * innerParam;
        console.log("Multiplication of outer parameter" + " (" + outerParam + ") " + "and inner parameter" + " (" + innerParam + ") " + "is: " + result);
        return result;
    };
    return innerFunc;
};

// calling outerFunc
var closureFunction = outerFunc(4);
// calling closure
alert(closureFunction(5));
console.log(closureFunction(5));