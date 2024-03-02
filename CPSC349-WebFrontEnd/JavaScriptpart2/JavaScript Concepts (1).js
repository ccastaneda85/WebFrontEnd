
// /*

// This code is written in JavaScript and contains examples of various concepts of the language such as printing to console, variables, data types, operators, functions, conditionals, loops, arrays, and string methods.

// The code starts with ways to print in JavaScript and then moves on to the console API. It then explains variables and their usage in JavaScript, followed by data types such as numbers, strings, objects, booleans, undefined, and null. It then explains the difference between primitive and reference data types.

// After that, the code explains operators such as arithmetic, assignment, comparison, and logical operators. It then moves on to functions and their usage in JavaScript. Next, the code explains conditionals such as if, if-else, and if-else ladder.

// The code then explains loops such as for, forEach, while, and do-while loops, and then moves on to arrays and their methods such as push, pop, shift, and unshift. Finally, the code explains string methods such as length, indexOf, lastIndexOf, and replace.

// Overall, this code is a beginner-friendly introduction to JavaScript concepts and serves as a good starting point for someone who wants to learn the language.


//  */


// // 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("Hello World");
// document.write("this is document write")

// // 2. Javascript console API
// // console.log("Hello World", 4 + 6, "Another log");
// // console.warn("this is warning");
// // console.error("This is an error");

// // 3. JavaScript Variables
// // What are Variables? - Containers to store data values

// /*
// multi 
// line 
// commment
// */

// var number1 = 34;
// var number2 = 56;
// // console.log(number1 + number2);

// // 4. Data types in JavaScript
// // Numbers
// var num1 = 455;
// var num2 = 56.76;

// // String
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// // Objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.977
// }
// // console.log(marks);

// // Booleans
// var a = true;
// var b = false;
// // console.log(a, b);

// // var und = undefined;
// var und;
// // console.log(und);

// var n = null;
// // console.log(n);
// /*
// At a very high level, there are two types of data types in JavaScript
// 1. Primitive data types: undefined, null, number, string, boolean, symbol
// 2. Reference data types: Arrays and Objects
// */

// var arr = [1, 2, "bablu", 4, 5]
// // console.log(arr)

// // Operators in JavaScript
// // Arithmetic Operators
// var a = 100;
// var b = 10;
// // console.log("The value of a + b is ", a+b);
// // console.log("The value of a - b is ", a-b);
// // console.log("The value of a * b is ", a*b);
// // console.log("The value of a / b is ", a/b);

// // Assignment Operators
// var c = b;
// // c += 2;
// // c -= 2; // c = c - 2;
// // c *= 2;
// // c /= 2;
// // console.log(c);

// // Comparison Operators
// var x = 34;
// var y = 56;
// // console.log(x == y);
// // console.log(x >= y);
// // console.log(x <= y);
// // console.log(x > y);
// // console.log(x < y);

// // Logical Operators

// // Logical and
// // console.log(true && true)
// // console.log(true && false)
// // console.log(false && true)
// // console.log(false && false)

// // Logical or
// // console.log(true || true)
// // console.log(true || false)
// // console.log(false || true)
// // console.log(false || false)

// // Logical not
// // console.log(!false);
// // console.log(!true);

// // Function in JavaScript
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }
// // DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// // console.log(c1, c2);

// // Conditionals in JavaScript
// /*
// var age = 41;
// // Single if statement
// if(age > 18){
//     console.log('You can drink  water');
// }
// // if - else statement
// // if(age > 18){
// //     console.log('You can drink  water');
// // }
// // else{
// //     console.log('You cannot drink  water');
// // }

// age = 25;
// // if-else Ladder
// if(age > 32){
//     console.log("You are not a kid");
// }
// else if(age >26){
//     console.log("Bachhe nahi rahe");
// }
// else if(age >22){
//     console.log("Yes Bachhe nahi rahe");
// }
// else if(age >18){
//     console.log("18 Bachhe nahi rahe");
// }
// else{
//     console.log("Bachhe rahe");
// }
// console.log("End of ladder");
// */

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// // for(var i=0;i<arr.length;i++){
// //     if(i==2){
// //         // break;
// //         continue;
// //     }
// //     console.log(arr[i])
// // }

// // arr.forEach(function(element){
// //     console.log(element);
// // })
// // const ac = 0;
// // ac++;
// // ac = ac +1;
// // let j = 0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j ++;
// // }

// // do{
// //     console.log(arr[j]);
// //     j++;
// // } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];
// // Array Methods
// // console.log(myArr.length);
// // myArr.pop();
// // myArr.push("harry")
// // myArr.shift()
// // const newLen = myArr.unshift("Harry")
// // console.log(newLen);
// // console.log(myArr);
// // -------------------------------------------------------------------------------------------------
// //  String Methods in JavaScript
// let myLovelyString = "Harry is a good boy good good Harry";
// // console.log(myLovelyString.length)
// // console.log(myLovelyString.indexOf("good"))
// // console.log(myLovelyString.lastIndexOf("good"))

// // console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("Harry", "Rohan");
// // d = d.replace("good", "bad");
// // console.log(d, myLovelyString)

// let myDate = new Date();
// // console.log(myDate.getTime());
// // console.log(myDate.getFullYear());
// // console.log(myDate.getDay());
// // console.log(myDate.getMinutes());
// // console.log(myDate.getHours());
 
// // DOM Manipulation
// let elem = document.getElementById('click');
// // console.log(elem);

// let elemClass = document.getElementsByClassName("container")
// // console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// // console.log(elem.innerHTML);
// // console.log(elem.innerText); 
// getElementsByClassName

// // console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerText); 
// tn = document.getElementsByTagName('div')
// // console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// // removeChild(element); ---> removes an element
 
// // Selecting using Query
// // sel = document.querySelector('.container')
// // console.log(sel)
// // sel = document.querySelectorAll('.container')
// // console.log(sel)

// // function clicked(){
// //     console.log('The button was clicked')
// // }
// // window.onload = function(){
// //     console.log('The document was loaded')

// // }
// // Events in JavaScript
// // firstContainer.addEventListener('click', function(){
// //     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
// //     console.log("Clicked on Container")
// // })

// // firstContainer.addEventListener('mouseover', function(){
// //     console.log("Mouse on Container")
// // })

// // firstContainer.addEventListener('mouseout', function(){
// //     console.log("Mouse out of Container");
// // })

// // let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// // firstContainer.addEventListener('mouseup', function(){
// //     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
// //     console.log("Mouse up when clicked on Container");
// // })

// // firstContainer.addEventListener('mousedown', function(){
// //     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
// //     console.log("Mouse down when clicked on Container");
// // })


// // Arrow Functions
// // function summ(a, b){
// //     return a+b;
// // }
// summ = (a,b)=>{
//     return a+b;
// }

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }
// // SetTimeout and setinterval
// // clr = setTimeout(logKaro, 5000);
// // clr = setInterval(logKaro, 2000);
// // use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// // JavaScript localStorage
// // localStorage.setItem('name', 'harry') 
// // localStorage 
// // localStorage.getItem('name')
// // localStorage.removeItem('name')
// // localStorage.clear();

// // Json 
// // obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// // jso = JSON.stringify(obj);
// // console.log(typeof jso)
// // console.log(jso)
// // parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// // console.log(parsed);

// // Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`)

/*
Quiz march 8th -  CSS Bootstrap some HTML
Project due March 30th. 
    Quiz Application (Web Page) 10-15 questions
    1st.Page: login/Registration
    2nd Page: Questions
    3rd Page: Results
    HTML, CSS, Javascrip
*/

const s = "Hello World";
console.log(s.length);
let something = true;

x = something.__proto__; // tells you what class and methods that are applicable in the console
console.log(x.toString()); //.toString() is a method. not a property like .
let k = 'josh5678';

// console.log(k);
// let matches = k.match(/(\d+)/);
// console.log(matches[0]);


x = 13;

console.log(Math.pow(x, 2));

/**
 *  There is a difference between Boolean primities and Boolean objects. 
 */

const arr = [1, 'string', null];
for(var i = 0; i < arr.length; i++) {
    console.log(arr.at(i));
}

console.log(arr);

arr.push('crazy');

console.log(arr);

arr.pop();

console.log(arr);

arr.shift();
arr.shift();
arr.shift();

console.log(arr);

