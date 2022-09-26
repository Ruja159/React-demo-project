import { AxiosResponse } from 'axios';
import BaseService from '../common/BaseService';

const getPredmeti = async (data = {}, query = {}): Promise<any> => {
    const baseService = new BaseService();
    const url = '/predmeti'
    const response: AxiosResponse<any> = await baseService.get(url);
    return response.data;
};

export { getPredmeti };
export default {};