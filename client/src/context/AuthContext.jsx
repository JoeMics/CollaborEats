import { useState, createContext, useEffect } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import api from '../lib/api';
import { fetchCurrentUser } from '../services/api';

// Initialize Firebase
import '../lib/firebase';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const signInWithGoogle = () => {
    // Using a popup
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async () => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        const res = await fetchCurrentUser();
        setUser(res.data);
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

  useEffect(() => {
    // On auth state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        // Update http headers
        const accessToken = await auth.currentUser.getIdToken();
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        const result = await fetchCurrentUser();
        setUser(result.data);
      } else {
        api.defaults.headers.common['Authorization'] = null;
        setUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  const authInfo = { user, setUser, signInWithGoogle, handleSignOut };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
