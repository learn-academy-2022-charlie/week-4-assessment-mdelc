// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffle", () => {
   const colors1 = ["purple", "blue", "green", "yellow", "pink"] // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"] // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    }) 
})

// ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content

// ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.


// Create a function called shuffle that takes in an array as a parameter
// remove the first item in the array so it's not included in the shuffled return array
// Next using a for loop, assign each color in the array without first color an attached value to index
// Return array newly shuffled

 
const shuffle = (array) => {
    array.shift()
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
}
return array
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


describe("minMax", () => {
const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]
    it("a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

// ● minMax › a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order

// ReferenceError: minMax is not defined



// b) Create the function that makes the test pass.

// Create a function called minMax with an array as the parameter
// Use built-in method to sort the numbers from least to greatest
// Return the 0th and last index in an array

const minMax = (array) => {
   array.sort((a,b) => a-b)
   return [array[0],array[array.length -1]]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("uniqArray", () => {
const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    it("a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(uniqArray(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// ReferenceError: uniqArray is not defined


// b) Create the function that makes the test pass.


// Create a function called uniqArray that takes in 2 arrays as parameter
// create a variable to combine both arrays into one single array
// Use a method to return a single array with only unique values

const uniqArray = (array1, array2) => {
    let combArray = array1.concat(array2)
    let arraySet = new Set(combArray)
    let finArray = Array.from(arraySet)
    return finArray
}