function resolveAfter3Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter3Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  