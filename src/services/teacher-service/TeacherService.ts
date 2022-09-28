import { AxiosResponse } from "axios";
import BaseService from "../common/BaseService";

const addTeacher = async (data = {}, query = {}): Promise<any> => {
  const baseService = new BaseService();
  const url = "/nastavnici";
  const response: AxiosResponse<any> = await baseService.post(url, data);
  return response.data;
};

export { addTeacher };
export default {};
