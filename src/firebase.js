
const Firebase = () => {
require('firebase/app')

const firebaseConfig = {
  apiKey: "AIzaSyC2U0lTSyFSzBoym3QtqS6bz1l74tf7M0s",
  authDomain: "burger-queen-85635.firebaseapp.com",
  databaseURL: "https://burger-queen-85635.firebaseio.com",
  projectId: "burger-queen-85635",
  storageBucket: "burger-queen-85635.appspot.com",
  messagingSenderId: "175776335071",
  appId: "1:175776335071:web:b23e6de58832e0d047556a"
};

firebase.initializeApp(firebaseConfig);
}

export default Firebase;
