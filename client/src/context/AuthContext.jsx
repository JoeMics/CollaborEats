import { useState, createContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import axios from 'axios';
import api from '../lib/api';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env;

// Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Initialize Firebase
  initializeApp(firebaseConfig);
  const auth = getAuth();

  const signInWithGoogle = () => {
    // Using a popup
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        const { user } = result;

        // access token to send to server for authorization
        const { accessToken } = user;

        await updateHttpHeaders(accessToken);

        // TODO: authenticate with backend, use backend user
        // to set state instead of result.user
        setUser({
          name: user.displayName,
          email: user.email,
          picture: user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHttpHeaders = async (token) => {
    const accessToken = token || (await auth.currentUser.getIdToken());
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser({ name: user.displayName, email: user.email, picture: user.photoURL });
        await updateHttpHeaders();
      } else {
        setUser(null);
        await updateHttpHeaders();
      }
    });

    return unsubscribe;
  }, [auth]);

  const authInfo = { user, setUser, signInWithGoogle, handleSignOut };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
