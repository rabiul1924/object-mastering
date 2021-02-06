function doSomething (){
    console.log(3333);
}
console.log(2222);
// doSomething();

//setTimeout
//1
// setTimeout(doSomething, 1000);

//2
// setTimeout(function(){
//     console.log('Lazy');
// }, 1000);


//3
// setTimeout(() => {
//     console.log('lazy');
// }, 1000);


//setInterval
setInterval(
    function(){
        console.log('lazy');
    }, 1000
)

console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);