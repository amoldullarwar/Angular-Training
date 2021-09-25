function result() {
    return new Promise(function(resolve,reject){
    resolve("I am done");
    })
    
    }
    
    async function add() {
    let val = await result();
    console.log("first is val", val)
    console.log("second thing");
    }
    
    add();