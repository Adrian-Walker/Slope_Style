// Rest & Spread

const collectAnimals = (...a) => {
    return [...a]
}
console.log(collectAnimals('pig', 'cat', 'dog', 'fish', 'bear', 'lion',));

//Rest & Spread

const combinedFruit = (fruit, sweets, vegetables) => ({ fruit, sweets, vegetables })
console.log(combinedFruit(['apple', 'pear'], ['cake', 'ice cream'], ['corn', 'cabbage']))

//Destructuring
const vacation = {
    location: "Jamaica",
    duration: "6 months",
}

function parseSentence({ location, duration }) {
    return `I am headed to ${location} for ${duration}`
}

console.log(parseSentence(vacation))


//Destructuring
const items = ['ring', 'hat', 'shoe']
const returnFirst = (firstItem, ...items) => {
    return firstItem;
}
console.log(returnFirst(...items))

//Template Literals

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(firstFav, secondFav, thirdFav, ...arr) {
    return `My top three favorite activities are, ${firstFav} ,   ${secondFav} , and   ${thirdFav}`;
}
console.log(returnFavorites(...favoriteActivities))

// Rest + Spread ****
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = (...animals) => {
    return animals.reduce((a, b) => a.concat(...b), [])
}
const allAnimals = combineAnimals(realAnimals, mysteriousAnimals, magicalAnimals)
console.log(allAnimals)

// Make more Es6y

const product = (a, b, c, d, e) => {
    var numbers = [a, b, c, d, e];

    return numbers.reduce((acc, number) => {
        return 7 * 41;
    }, 1)
}
console.log(product())

// Make Function more es6

const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e']
const arr3 = [...arr1, ...arr2]

const unshift = (arr, ...arr4) => {
    console.log(arr, arr4)
    return arr4.concat(arr)
}
console.log()
console.log(unshift(arr2, 'a', 's'))
