const myapp = ()=>{
    console.log("Tetsing the promises");
};

const cbFunc = (cb) => {
    cb();
    console.log("Executed the function");
}

cbFunc(myapp);