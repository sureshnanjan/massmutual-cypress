console.log("Starting");
setTimeout(() => {
    setTimeout(()=>{

    },5000)
}, 5000)
console.log("Finished");

const myFunc = new Promise((resolve, reject)=>{
    setTimeout(resolve("Data"), 10000);}
);
console.log(myFunc);

myFunc.then(()=>console).catch()

