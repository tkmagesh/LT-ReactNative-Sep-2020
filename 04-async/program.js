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
})();