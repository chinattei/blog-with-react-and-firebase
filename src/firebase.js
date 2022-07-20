// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDxfbLAVAN3wLclH9cya1nNAbg8MN3Dxu0',
  authDomain: 'blog-with-react-and-fire-7219b.firebaseapp.com',
  projectId: 'blog-with-react-and-fire-7219b',
  storageBucket: 'blog-with-react-and-fire-7219b.appspot.com',
  messagingSenderId: '839947203051',
  appId: '1:839947203051:web:435bfc9408bbcd3087e9ae',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
