var promise = new Promise(function (resolve, reject) {
    resolve(1);
    // callbacks
    // reject(2);
    // You can either resolve or reject a promise, but you cannot do both at the same time
    });
    promise.then(function (val) {
    console.log(val);
    return val + 2;
    
    
    }).then(function (val) {
    console.log(val);
    }).catch(function (e) { /// The catch callback is executed when the promise is rejected
    console.log('in catch: ', e);
    });