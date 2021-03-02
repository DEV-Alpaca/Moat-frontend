import axios from '../../../node_modules/axios/index';

const client = axios.create();

//client.default.baseURL = 'process.env.SERVER_URL';

//client.default.headers.common['Authorization'] = '';

export default client;
