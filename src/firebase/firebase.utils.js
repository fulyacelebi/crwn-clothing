import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBKoDDHxmhQI2dvYQmpjDNBhif7K8JqdcA',
  authDomain: 'crwn-db-86108.firebaseapp.com',
  projectId: 'crwn-db-86108',
  storageBucket: 'crwn-db-86108.appspot.com',
  messagingSenderId: '134581150447',
  appId: '1:134581150447:web:abdad4115fcbd1c66eb11a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
