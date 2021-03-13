import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const {
  REACT_APP_API_KEY,
  REACT_APP_PROJECT_ID,
  REACT_APP_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: `${REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${REACT_APP_PROJECT_ID}.firebaseio.com`,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: `${REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: REACT_APP_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: `G-${REACT_APP_MEASUREMENT_ID}`
};

export default firebase.initializeApp(firebaseConfig);
