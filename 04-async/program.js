(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        var result = x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(){
        console.log(`[@Client] triggering the service`);
        var result = addSync(10,20);
        console.log(`[@Client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;    

    function addAsync(x, y, callback) {
      console.log(`   [@Service] processing ${x} and ${y}`);
      setTimeout(function(){
          var result = x + y;
          console.log(`   [@Service] returning result`);
          callback(result);
      }, 4000);
    }

    function addAsyncClient() {
      console.log(`[@Client] triggering the service`);
      addAsync(10, 20, function(result){
        console.log(`[@Client] result = ${result}`);
      });
      
    }

    window["addAsyncClient"] = addAsyncClient;
})();