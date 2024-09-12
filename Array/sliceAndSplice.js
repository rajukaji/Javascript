let lst = [1, 2, 3, 4, 5, 6, 7]

console.log(lst.slice(2, 5))
//prints from 2 index to 4 index element

console.log(lst.splice(2, 1))
//prints from starting index 2 and up to 1 elements after then,,,  that is deleted

console.log(lst)
//3 is already removed

lst.splice(2, 2)
//removes 2 elements after 2nd index position, 

console.log(lst)
//prints the rest