import bugApi from '../service/bugApi';
import load from './load';
async function addNew(bugName){
    const newBugData = {
      id: 0,
      name: bugName,
      createdAt: new Date(),
      isClosed: false
    };
    const newBug = await bugApi.save(newBugData);
    return load();
    /* const action = { type : 'ADD_BUG', payload : newBug };
    return action; */
}

export default addNew;