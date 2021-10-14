// // findMatching- This function takes an array of drivers' 
// names and a string as arguments, and returns the matching list of drivers.
//  The function should be case insensitive.

function findMatching(array, str) {
    const newArray = []
    const result = array.filter(newArray => newArray.toLowerCase() == str.toLowerCase())
    return result;
}


// fuzzyMatch - This function takes an array of drivers' names and a string as arguments 
// for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(array, str) {
        const newArray = []
        const result = array.filter(newArray => newArray[0] == str[0])
        return result;
}


// matchName - This function takes an array of driver objects and a string as arguments. 
// Each driver object has two properties: name and hometown. The function should return each
//  element whose name property matches the provided string argument.

function matchName(array,str) {
    const newArray = []
        const result = array.filter(newArray => newArray.name == str)
        return result;
}

