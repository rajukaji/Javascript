//convert js object literal into JSON format
//JSON.stringify(objectJS)
const Person = {
    name: "Doraemon", 
    friend: "Nobita", 
    talent: "AnyWhereDoor"
}

const intoJsonFormat = JSON.stringify(Person);
console.log(intoJsonFormat)