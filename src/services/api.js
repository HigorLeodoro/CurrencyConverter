import axios from 'axios';

// base URL: https://free.currconv.com/api/v7/
// > convert?q=USD_BRL&compact=ultra&apiKey=c1c90191c2ae89e7113c

const api = axios.create({
 baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;