import axios from 'axios';

const apiFunction = axios.create({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  baseURL: 'https://api.expomultimix.com/',
});

export default apiFunction;
