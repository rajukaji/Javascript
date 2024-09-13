const numbers = [10, 20, 30];

let index = Number(prompt());

try
{
    if(index >=0 && index < 4)
        {console.log(numbers[index]);}
    else
        {throw new Error("Index is wrong");}  
}
catch(er)
{
    console.log(er.message)
}