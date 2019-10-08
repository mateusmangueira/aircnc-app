import axios from 'axios';


//Ip do APP Expo, pode mudar as vezes.
const api = axios.create({
    baseURL: 'http://192.168.0.102:3333',
});

export default api;