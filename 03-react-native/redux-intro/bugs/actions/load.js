import bugApi from '../service/bugApi';

/* function load(){
    //using the async middleware
     return function(dispatch){
        bugApi
            .getAll()
            .then(bugs => {
                const action = { type : 'INIT_BUGS', payload : bugs };
                dispatch(action);
            })
    } 

} */

/* function load(){
    //using the promise middleware
    return bugApi.getAll().then(bugs => {
      const action = { type: "INIT_BUGS", payload: bugs };
      return action;
    });
} */
 
//async await version of the above
async function load() {
  //using the promise middleware
  const bugs = await bugApi.getAll()
  const action = { type: "INIT_BUGS", payload: bugs };
  return action;
}

export default load;