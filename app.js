const numberToFormat = 23551.25 // Number to be formatted.
let numberToString = '' // Converting it into a string.

// We need to slice the number into 2 parts, that's why we need an 'Array' that
// will hold 'Elements' before the period '.'.
let numbersBeforeDecimalArray = []

// These 2 'Array' will be very essential to create the 'Elements' after the
// decimal point.
let numbersAfterDecimalArray = []
let numbersAfterDecimalTempArray = []

// The first slice 'Array'.
let numbersSliceOneArray = []

// The second slice 'Array'.
let numbersSliceTwoArray = []

let divider = 3 // Constant divider representing 3 places before the comma ','.
let numbersLengthModulu = 0 // The remainder or modulu.
let numbersLengthQuotient = 0 // The quotient.

// Combine the 'Elements' of 'numbersSliceOneArray' and 'numbersSliceTwoArray'.
let numbersSliceAll = []

// The final 'String' that we can display.
let numberFormatted = ''

const process = function(number) {   
    // Converting first the 'number variable' into a 'String'.
    numberToString = number.toString()

    // We loop through 'numberToString' letters, then check if the current letter which
    // is represented by '[i]' is not equal '!=' to period '.', if 'true', then we push
    // the current element to the 'numbersBeforeDecimalArray Array'. The 'else statement'
    // will stop this process.
    for (let i = 0; i < numberToString.length; i++) {
        if (numberToString[i] != '.') {
            numbersBeforeDecimalArray.push(numberToString[i])
        } else { return }
    }
}

const processTwo = function() {
    // A different arrangement of the 'For loop' so that we can start looping through the
    // 'Elements' at the very end of 'numberToString' then push the 'Elements' until the 
    // loop discovers the period '.' then the loop breaks.
    for (let i = numberToString.length - 1; i != 0; i--) {
        if (numberToString[i] != '.') {
            numbersAfterDecimalTempArray.push(numberToString[i])
        } else { return }
    }    
}

const processThree = function() {
    // Since the resulting 'Array' will have a reverse formation of what we're looking for,
    // we will do another 'For loop' to reverse the placment one again, thus, getting the 
    // correct arrangement we need.
    for (let i = numbersAfterDecimalTempArray.length; i != 0; i--) {
        numbersAfterDecimalArray.push(numbersAfterDecimalTempArray[i - 1])
    }
}

const processFour = function() {
    // Getting the 'remainder or modulu'.
    numbersLengthModulu = numbersBeforeDecimalArray.length % divider

    // Getting the 'qoutient'.
    numbersLengthQuotient = parseInt(numbersBeforeDecimalArray.length / divider)

    // Setting the 'sliceTwoCounter Variable' which needs to be equal to the 'remainder or
    // modulu' but less than 1.
    let sliceTwoCounter = numbersLengthModulu - 1

    // The 'Variable' to count how many times we pushed an 'Element' where we limit only to 3.
    let pushCount = 0

    // Constructing the 'numbersSliceOneArray Array' which will hold the 'Elements' to be
    // preceeded by the first comma, ',' to format the 'number'.    
    for (let i = 0; i < numbersLengthModulu; i++) {
        numbersSliceOneArray.push(numbersBeforeDecimalArray[i])
    }

    // Then we push a comma ',', our first one if 'numbersLengthModulu variable' is not equal to 0.
    if (numbersLengthModulu != 0) {
        numbersSliceOneArray.push(',')
    }    

    // We construct the next set of 'Elements' that will be added to 'numbersSliceTwoArray Array'
    // where these set represents the numbers that are divisible by 3, meaning, we can  place a
    // comma in every 3rd place but not at the last 'Element'.
    //
    // For example, 123456789
    // We can put a comma after 3, 6 but not at 9 which is the last 'Element'. 
    while (sliceTwoCounter < numbersBeforeDecimalArray.length - 1) {
        sliceTwoCounter++        
        if (pushCount != divider) {
            numbersSliceTwoArray.push(numbersBeforeDecimalArray[sliceTwoCounter])
            pushCount++
        } else if (pushCount == 3) { 
            numbersSliceTwoArray.push(',')
            pushCount = 0
            sliceTwoCounter--        
        }
    }

    // Pusing the period lastly to this 'Array'
    numbersSliceTwoArray.push('.')

    // Spreading the 'Elements' of the 3 'Arrays'.
    numbersSliceAll = [...numbersSliceOneArray, ...numbersSliceTwoArray, ...numbersAfterDecimalArray]

    // Finalizing the 'String'.
    for (let i = 0; i < numbersSliceAll.length; i++) {
        numberFormatted += numbersSliceAll[i]
    }
}

process(numberToFormat)
processTwo()
processThree()
processFour()

// Checking values.
console.log('numberToFormat', numberToFormat)
console.log('numberToString', numberToString)
console.log('numbersBeforeDecimalArray', numbersBeforeDecimalArray)
console.log('numbersBeforeDecimalArray length', numbersBeforeDecimalArray.length)
console.log('numbersAfterDecimalTempArray', numbersAfterDecimalTempArray)
console.log('numbersAfterDecimalArray', numbersAfterDecimalArray)
console.log('numbersLengthModulu', numbersLengthModulu)
console.log('numbersLengthModulu type', typeof numbersLengthModulu)
console.log('numbersLengthQuotient', numbersLengthQuotient)
console.log('numbersSliceOneArray', numbersSliceOneArray)
console.log('numbersSliceTwoArray', numbersSliceTwoArray)
console.log('numbersSliceAll', numbersSliceAll)
console.log('numberFormatted', numberFormatted)