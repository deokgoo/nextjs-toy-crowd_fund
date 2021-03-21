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

  private apiRequest({method, path, payload, idToken}: {method: Method , path: string, payload?: object, idToken?: string}) {
    const url = `${REACT_APP_API_URL}${path}`;
    return axios({
      method,
      url,
      headers: {
        authorization: 'Bearer ' + idToken,
      },
      data: payload,
    })
  }

  async getInfoByFid(fid: string): Promise<any> {
    const method = 'GET';
    const path = `/public/crowd/${fid}`;
    const { data } = await this.apiRequest({method, path});
    return data.info;
  }

  async getInvestorListByFid(fid: string): Promise<AmountType[]> {
    const method = 'GET';
    const path = `/public/crowd/${fid}`;
    const { data } = await this.apiRequest({method, path});
    return data.participate;
  }

  async getMyList(idToken: string) {
    const method = 'GET';
    const path = `/private/crowd`;
    const { data } = await this.apiRequest({method, path, idToken});
    return data;
  }

  async deposit({payload, idToken}: {payload: any, idToken: string}) {
    const method = 'POST';
    const path = `/private/crowd/deposit`;
    const { data } = await this.apiRequest({method, path, idToken, payload});
    return data;
  }

  async register(payload: { email: string, password: string, name: string }) {
    const method = 'POST';
    const path = `/public/register`;
    await this.apiRequest({method, path, payload });
  }

  async createCrowdFunding({payload, idToken}: {payload: {title: string, desc: string, targetMoney: number}, idToken: string}) {
    const method = 'POST';
    const path = `/private/crowd/create`;
    await this.apiRequest({method, path, idToken, payload})
  }
}

export default ApiService;
