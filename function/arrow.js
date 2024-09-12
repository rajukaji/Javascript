function add(n1, n2)
{
    return n1+n2;
}

console.log(add(3, 5));
//normal function

const adding = (n1, n2) => {return n1+n2;};
//explicit return;
console.log(adding(2,5));

const sub = (n1, n2) => n2 - n1;
//this implicitely returns
console.log(sub(3, 2));