import axios from 'axios';

const serviceEndPoint = "http://10.0.2.2:3000/bugs";

async function getAll(){
    const response = await axios.get(serviceEndPoint);
    return response.data;
}

async function save(bugData){
    if (bugData.id === 0){
        const response = axios.post(serviceEndPoint, bugData);
        return response.data
    } else {
        const response = axios.put(`${serviceEndPoint}/${bugData.id}`, bugData);
        return response.data;
    }
}

export default { getAll, save };