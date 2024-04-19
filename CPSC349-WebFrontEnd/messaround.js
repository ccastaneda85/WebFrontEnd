

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// const plusones = numbers.map(function(element){
//     return element + 2;
// });

// const cubes = numbers.map(function(element) {
//     return Math.pow(element, 3);
// })


// console.log(squares);
// console.log(plusones);
// console.log(cubes);

// function square(element) {
//     return Math.pow(element, 2);
// }

// const evenNumbs = numbers.filter(function(element) {
//     return element % 2 === 0;
// })

// console.log(evenNumbs);

// const total = numbers.reduce(function(accumulator, element) {
//     return accumulator + element;  
// })

// console.log(total);

// const hello = (name, age) => {console.log(`Hello ${name}`) 
//                          console.log(`You are ${age} years old.`);}

// hello("Cutie!", 22);

// const quads = numbers.map((element) => Math.pow(element,4));
// console.log(quads);

// function myDisplayer(something) {
//     document.getElementById("cray").innerHTML = something;
// }

// setTimeout(myDisplayer, 1500, "sup dude its been 1.5 seconds and your still just reading?!");

function myDisplayer(some) {
    document.getElementById("cray").innerHTML = some;
}

let myPromise = newPromise((myResolve, myReject) => {
    let x = 1;
    if(x == 0) {
        myResolve("OK");
    }
    else {
        myReject("Error");
    }
});

myPromise.then((value) => {myDisplayer(value);}, (error) => {myDisplayer(error);});