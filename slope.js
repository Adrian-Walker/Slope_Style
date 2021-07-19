// Rest & Spread

const collectAnimals = (...a) => {
    return [...a]
}
let animals = []
console.log(collectAnimals('pig', 'cat', 'dog', 'fish', 'bear', 'lion',));

//Rest & Spread

const combinedFruit = (fruit, sweets, vegetables) => ({ fruit, sweets, vegetables })
console.log(combinedFruit(['apple', 'pear'], ['cake', 'ice cream'], ['corn', 'cabbage']))

//Destructuring

const vacation = {
    location: "Jamaica",
    duration: "6 months"
}
function parseSentence(location, duration) {
    return `I am headed to ${location} for ${duration}`
};

//es6
const items = ['ring', 'hat', 'shoe']
const returnFirst = (items) => {
    const firstItem = items;
    return firstItem[0];
}

//Template Literals

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    var firstFav = favoriteActivities[0]
    var secondFav = favoriteActivities[2]
    var thirdFav = favoriteActivities[3]
    return `My top three favorite activities are, ${firstFav} ,  + ${secondFav} , and " + ${thirdFav}`;
}

returnFavorites(favoriteActivities)
returnFavorites(favoriteActivities)
