// Rest & Spread

const collectAnimals = (...a) => {
    return [...a]
}
// let animals = []
console.log(collectAnimals('pig', 'cat', 'dog', 'fish', 'bear', 'lion',));

//Rest & Spread

const combinedFruit = (fruit, sweets, vegetables) => ({ fruit, sweets, vegetables })
console.log(combinedFruit(['apple', 'pear'], ['cake', 'ice cream'], ['corn', 'cabbage']))

//Destructuring
const vacation = {
    location: "Jamaica",
    duration: "6 months",
}

function parseSentence(location, duration) {
    return `I am headed to ${location} for ${duration}`
}

console.log(parseSentence(vacation.location, vacation.duration))


//Destructuring
const items = ['ring', 'hat', 'shoe']
const returnFirst = (items) => {
    const firstItem = items;
    return firstItem[0];
}

console.log(returnFirst(items))

//Template Literals

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    var firstFav = favoriteActivities[0]
    var secondFav = favoriteActivities[2]
    var thirdFav = favoriteActivities[3]
    return `My top three favorite activities are, ${firstFav} ,  + ${secondFav} , and " + ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))

// Rest + Spread

const combineAnimals = (...realAnimals, ...magicalAnimals, ...mysteriousAnimals) => {
    return [realAnimals, magicalAnimals, mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals())






// Make more Es6y

const product = (a, b, c, d, e) => {
    var numbers = [a, b, c, d, e];

    return numbers.reduce((acc, number) => {
        return acc * number;
    }, 1)
}

console.log(product(a,b,c,d,e))
