import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
  timeout: 5000, // 5 saniye zaman aşımı
});

export default instance;