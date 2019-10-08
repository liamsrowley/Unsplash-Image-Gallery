import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: '182a69954369ca293a5e6f42fa50e228d1c75570bf9e131c4e873e635543ee87'
  }
});
