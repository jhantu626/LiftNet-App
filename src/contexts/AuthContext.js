import AsyncStorage from '@react-native-async-storage/async-storage';

const { createContext, useContext, useState, useEffect } = require('react');

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const login = async token => {
    setAuthToken(token);
    await AsyncStorage.setItem('token', token);
    setAuthenticated(true);
  };

  const logout = async () => {
    setAuthToken(null);
    await AsyncStorage.removeItem('token');
    setAuthenticated(false);
  };

  const syncLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setAuthToken(token);
        setAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    syncLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authToken, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { useAuth };

export default AuthProvider;
