/* eslint-disable class-methods-use-this */
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common.Authorization = 555;

class HttpClient {
  constructor(config = {}) {
    this.service = axios.create({
      ...config,
      baseURL: config.baseURL || process.env.REACT_APP_BASE_URL,
    });
  }

  get(url, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then((resposne) => resolve(resposne.data))
        .catch((error) => reject(error));
    });
  }

  post(url, data, config) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then((resposne) => resolve(resposne.data))
        .catch((error) => reject(error));
    });
  }
}

const https = new HttpClient();

export default https;
