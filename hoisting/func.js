//function hoisting

sayHello();

function sayHello()
{
    console.log("Hello!");
}

// but, the arrow function is not hoisted

sayBye();

const sayBye = () => {console.log('bye!')};