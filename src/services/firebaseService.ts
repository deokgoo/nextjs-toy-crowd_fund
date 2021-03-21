import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import { LoginType } from './type';

const {
  REACT_APP_API_KEY,
  REACT_APP_PROJECT_ID,
  REACT_APP_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;

class FirebaseService {
  private static _instance: FirebaseService;
  private firebase: firebase.app.App;

  private constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: REACT_APP_API_KEY,
      authDomain: `${REACT_APP_PROJECT_ID}.firebaseapp.com`,
      databaseURL: `https://${REACT_APP_PROJECT_ID}.firebaseio.com`,
      projectId: REACT_APP_PROJECT_ID,
      storageBucket: `${REACT_APP_PROJECT_ID}.appspot.com`,
      messagingSenderId: REACT_APP_SENDER_ID,
      appId: REACT_APP_APP_ID,
      measurementId: `G-${REACT_APP_MEASUREMENT_ID}`,
    });
  }

  static get instance() {
    if(!FirebaseService._instance) {
      FirebaseService._instance = new FirebaseService();
    }
    return FirebaseService._instance;
  }

  async getIdToken(): Promise<string> {
    const idToken = await this.firebase.auth().currentUser?.getIdToken();
    if(!idToken) throw new Error('idToken not exist');
    return idToken;
  }

  statusChange(callBack: (user: firebase.User | null) => void) {
    this.firebase.auth().onAuthStateChanged(function(user) {
      callBack(user);
    });
  }

  async login({email, pw}: LoginType): Promise<firebase.User|null> {
    const userCredential = await this.firebase.auth().signInWithEmailAndPassword(email, pw);
    return userCredential.user;
  }

  async logout(): Promise<void> {
    return await this.firebase.auth().signOut();
  }

}

export default FirebaseService;
