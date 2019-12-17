import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAA6UICKUIiV6s_hG3Sdrb9JVGEbDCr9-w',
  authDomain: 'burguer-queen-aff2c.firebaseapp.com',
  databaseURL: 'https://burguer-queen-aff2c.firebaseio.com',
  projectId: 'burguer-queen-aff2c',
  storageBucket: 'burguer-queen-aff2c.appspot.com',
  messagingSenderId: '271698652915',
  appId: '1:271698652915:web:d405a72bfbbbe9ac639186',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
