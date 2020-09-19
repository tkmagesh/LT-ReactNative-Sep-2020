import axios from 'axios';

function increment(delta) {
    return function(dispatch){
        /* axios.get('http://10.0.2.2:8080/data')
            .then(function(response){
                return response.data;
            })
            .then(function(delta){
                const action = { type: "INCREMENT", payload: delta };
                dispatch(action);
            }) */
        setTimeout(function(){
            const action = { type: "INCREMENT", payload: delta };
            dispatch(action);
        }, 4000);
    }
        


}
export default increment;
