import axios, { AxiosStatic } from 'axios';

import { get } from '../../configuration';

class HttpClient {
  private service: AxiosStatic;

  constructor() {
    const config = get();
    const service = axios;
    service.defaults.timeout = 20000;
    service.defaults.baseURL = config.API_BASE_URL;
    service.defaults.withCredentials = true;

    this.service = axios;
  
  }

  async get(tempURL: string, config?: object) {
    const { service } = this;
    return service.get(tempURL, config);
  }

  async delete(tempURL: string, config: object) {
    const { service } = this;
    return service.delete(tempURL, config);
  }

  async head(tempURL: string, config: object) {
    const { service } = this;
    return service.head(tempURL, config);
  }

  async post(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.post(tempURL, data, config);
  }

  async put(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.put(tempURL, data, config);
  }

  async patch(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.patch(tempURL, data, config);
  }
}

export default HttpClient;