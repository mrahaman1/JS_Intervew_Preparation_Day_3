// undefined,NaN,not defined
let x;
console.log(x/2);
b();

//callback hell
setTimeout(()=>{
    console.log("hi")
    setTimeout(()=>{
        console.log("Hello")
        setTimeout(()=>{
            console.log("How are You")
        },3000)
    },2000)
},1000)

// self invoking function
(function(){
    var greet="Good Morning"
    console.log(greet);
})();
console.log(greet);

// setTimeout

setTimeout(()=>{
    console.log("Hello");
},3000)