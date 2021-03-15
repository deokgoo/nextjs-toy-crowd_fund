import axios, { Method } from 'axios';
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

  private apiRequest({method, path, requestData, idToken}: {method: Method , path: string, requestData?: object, idToken?: string}) {
    const url = `${REACT_APP_API_URL}${path}`;
    return axios({
      method,
      url,
      headers: {
        authorization: 'Bearer ' + idToken,
      },
      data: requestData,
    })
  }

  async getInvestorListByFid(fid: string): Promise<AmountType[]> {
    const method = 'GET';
    const path = `/public/crowd/${fid}`;
    const { data } = await this.apiRequest({method, path})
    return data.participate;
  }

  async getMyList(idToken: string) {
    const method = 'GET';
    const path = `/private/crowd`;
    const { data } = await this.apiRequest({method, path, idToken});
    return data;
  }
}

export default ApiService;
