import { useEffect } from 'react';
import { useState, createContext } from 'react';
import { fetchCurrentUser } from '../services/api';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const authInfo = { user, setUser };

  // Allows user to stay logged in after refresh
  // receives user from server, after checking active sessions
  useEffect(() => {
    async function fetchUser() {
      const result = await fetchCurrentUser();
      setUser(result.data);
    }

    fetchUser();
  }, []);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
