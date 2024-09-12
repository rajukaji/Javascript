try
{
    console.log(a);
}

catch(err)
{
    console.log(`Error type : ${err}`)
}

let a = 1
try
{
    a = a / 0;
}
catch(e)
{
    console.log(e);
}
finally
{console.log('this gets executed anyway!');}