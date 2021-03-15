import FirebaseService from './firebaseService';
import ApiService from './apiService';

export const getMyList = async () => {
  const idToken = await FirebaseService.instance.getIdToken();
  console.log('idToken', idToken);
  return ApiService.instance.getMyList(idToken);
}
