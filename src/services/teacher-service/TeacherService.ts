import { AxiosResponse } from "axios";
import BaseService from "../common/BaseService";

const addTeacher = async (data = {}, query = {}): Promise<any> => {
  const baseService = new BaseService();
  const url = "/nastavnici";
  const response: AxiosResponse<any> = await baseService.post(url, data);
  return response.data;
};

const getTeacherById = async (id: number): Promise<any> => {
  const baseService = new BaseService();
  const url = "/nastavnici";
  const response: AxiosResponse<any> = await baseService.getById(url, id);
  return response;
};

const editTeacher = async (data: {}, id: number): Promise<any> => {
  const baseService = new BaseService();
  const url = "/nastavnici";
  const response: AxiosResponse<any> = await baseService.put(url, id, data);
  return response.data;
};

export { addTeacher, getTeacherById, editTeacher };
export default {};
