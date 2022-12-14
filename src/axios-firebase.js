import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://to-do-list-b1d67-default-rtdb.europe-west1.firebasedatabase.app/taches',
});

export default instance;
