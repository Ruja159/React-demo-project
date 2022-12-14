import axios, { AxiosStatic } from "axios";

import { get } from "../../configuration";

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

  async getById(tempURL: string, id: number) {
    const { service } = this;
    return service.get(tempURL + `/${id}`);
  }

  async delete(tempURL: string, id: number) {
    const { service } = this;
    return service.delete(tempURL + `/${id}`);
  }

  async head(tempURL: string, config: object) {
    const { service } = this;
    return service.head(tempURL, config);
  }

  async post(tempURL: string, data: object, config?: object) {
    const { service } = this;
    return service.post(tempURL, data, config);
  }

  async put(tempURL: string, id: number, data: object) {
    const { service } = this;
    return service.put(tempURL + `/${id}`, data);
  }

  async patch(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.patch(tempURL, data, config);
  }
}

export default HttpClient;
