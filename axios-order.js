import axios from 'axios';

const instance = axios.create({
    baseURL: 'https:/myburger-react.firebaseio.com/'
});

export default instance;