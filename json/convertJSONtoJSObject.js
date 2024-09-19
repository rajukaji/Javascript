let st = '{"title": "The Catcher in the Rye", "author": "J.D. Salinger", "year": 1951}'
//JSON string

function convertToJSObject(st)
{
    const obj = JSON.parse(st)
    //convert into js object literal
    return obj
}


console.log(convertToJSObject(st))
//pass JSON