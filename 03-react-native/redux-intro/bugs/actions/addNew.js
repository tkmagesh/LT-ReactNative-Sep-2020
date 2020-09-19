import bugApi from '../service/bugApi';

async function addNew(bugName){
    const newBugData = {
      id: 0,
      name: bugName,
      createdAt: new Date(),
      isClosed: false
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type : 'ADD_BUG', payload : newBug };
    return action;
}

export default addNew;