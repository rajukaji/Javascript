function hoist()
{
    x = 15;
    //assign value first
    console.log(x);
    var x;
    //declare later on
    //but even if its declared later on, its always hoisted to the top of this scope/function scope
    //not with let or const, they to get hoisted to the top, but, they dont have any default value, 
    //default value of var is undefined
}

hoist();