import { AxiosResponse } from 'axios';
import BaseService from '../common/BaseService';

const deleteTeacher = async (id: number): Promise<any> => {
    const baseService = new BaseService();
    const url = '/nastavnici'
    const response: AxiosResponse<any> = await baseService.delete(url, id);
    return response;
};

export { deleteTeacher };
export default {};