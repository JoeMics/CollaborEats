import { useState, createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // This should ONLY be used for demo purposes
  // Ideally, authentication should be done using cookies or some other method
  // In the MVD functionality, we should be able to switch between TWO IDs:
  // 61e607f0311d699fd35f509e - JoeMics@example.com
  // 61e608607f04825b4c4cd517 - IvanTang@avatar.com
  const [userId, setUserId] = useState('61e607f0311d699fd35f509e');
  const authInfo = { userId, setUserId };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
