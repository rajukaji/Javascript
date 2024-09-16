//repeat code every milisecond
//setInterval(function, milisecond)

let interval = setInterval(function() {console.log('hello')}, 1000)//repeat in every 1 second
//1 sec == 1000 milisecond

setTimeout(() => {
    clearInterval(interval)
}, 5000)
//clear the interval after 5 second

console.log(interval)