import FirebaseService from './firebaseService';
import ApiService from './apiService';

export const getMyList = async () => {
  const idToken = await FirebaseService.instance.getIdToken();
  return ApiService.instance.getMyList(idToken);
}

export const getFundingInfo = async (fid: string): Promise<any> => {
  return ApiService.instance.getInfoByFid(fid);
}

export const deposit = async ({payload}: {payload: any}): Promise<any> => {
  const idToken = await FirebaseService.instance.getIdToken();
  return ApiService.instance.deposit({idToken, payload})
}
