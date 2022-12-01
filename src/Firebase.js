// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzd9H1kl9FInggL7pIiYkA2Mv93-CFkUs',
  authDomain: 'goog-auth-e1033.firebaseapp.com',
  projectId: 'goog-auth-e1033',
  storageBucket: 'goog-auth-e1033.appspot.com',
  messagingSenderId: '240984673131',
  appId: '1:240984673131:web:c0e115d688f98bda8c1a2e',
  measurementId: 'G-VDLVCV8DR0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      if (error) throw error;
    });
};
