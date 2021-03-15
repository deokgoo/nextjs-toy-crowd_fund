import axios from 'axios';
import { AmountType } from '../components/funding/funding';

const { REACT_APP_API_URL } = process.env;

class ApiService {
  private static _instance: ApiService;

  static get instance() {
    if(!ApiService._instance) {
      ApiService._instance = new ApiService();
    }
    return ApiService._instance;
  }

  async getInvestorListByFid(fid: string): Promise<AmountType[]> {
    const { data } = await axios.get(`${REACT_APP_API_URL}/public/crowd/${fid}`);
    return data.participate;
  }
}

export default ApiService;
