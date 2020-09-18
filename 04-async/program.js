(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        if (x === y) throw new Error('Invalid arguments');
        var result = x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        try {
            var result = addSync(x,y);
            console.log(`[@Client] result = ${result}`);
        } catch (e){
            console.log('something went wrong', e);
        }
    }

    window['addSyncClient'] = addSyncClient;    

    function addAsync(x, y, callback) {
      console.log(`   [@Service] processing ${x} and ${y}`);
      setTimeout(function(){
          if (x === y) return callback(new Error("Invalid arguments"));
          var result = x + y;
          console.log(`   [@Service] returning result`);
          callback(null, result);
      }, 4000);
    }

    function addAsyncClient(x,y) {

        console.log(`[@Client] triggering the service`);
        addAsync(x,y, function(err, result){
            if (err){
                console.log('something went wrong', err);
                return;
            }
            console.log(`[@Client] result = ${result}`);
        });
      
    }

    window["addAsyncClient"] = addAsyncClient;

     function addAsyncPromise(x, y) {
       console.log(`   [@Service] processing ${x} and ${y}`);
       var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function() {
              if (x === y) return rejectFn(new Error("Invalid arguments"));
              var result = x + y;
              console.log(`   [@Service] returning result`);
              resolveFn(result);
            }, 4000);
       });
       return p;
     }

     window['addAsyncPromise'] = addAsyncPromise;

      /* function addAsyncPromiseClient(x, y) {
         
         console.log(`[@Client] triggering the service`);
         var p = addAsyncPromise(x, y);
         p.then(function(result){
            console.log(`[@Client] result = ${result}`);
         });
      } */

      async function addAsyncPromiseClient(x, y) {
          console.log(`[@Client] triggering the service`);
          try{
            var result = await addAsyncPromise(x, y);
            console.log(`[@Client] result = ${result}`);
            return result * 2;
          } catch (err) {
              console.log("something went wrong", err);
          }
        
      }

     window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})();