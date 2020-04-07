import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-react-28002.firebaseio.com/'
});

export default instance;