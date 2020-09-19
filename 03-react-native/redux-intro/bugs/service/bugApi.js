import axios from 'axios';

async function getAll(){
    const response = await axios.get('http://10.0.2.2:3000/bugs');
    return response.data;
}

export default { getAll };