let lst = ['mango', 'apple', 'banana']

for (let i in lst)
{
    console.log(i);
    //only prints index
}

for (let i in lst)
{
    console.log(lst[i]);
    //now prints the value
}