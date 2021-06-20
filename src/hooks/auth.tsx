import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import { AsyncStorage } from 'react-native';

import { api } from '../services';

interface AuthState {
  token: string;
  user: UserProps;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface UserProps {
  first_name: string;
  last_name: string;
  email: string;
  telefone: string;
  whatsapp: string;
  status: "pendente" | "bloqueado" | "aprovado";
  cpf: string;
  saldo: number;
  facebook: string;
  instagram: string;
  telegram: string;
  admin: boolean;
  id: number;
}
interface AuthContextData {
  user: UserProps;
  signIn(credentials: signInCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@RABrasilCRM:token',
        '@RABrasilCRM:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
        api.defaults.headers.Authorization = `Bearer ${token[1]}`;
      }
    }

    setLoading(false);

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth', {
      email,
      password,
    });
    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    await AsyncStorage.multiSet([
      ['@RABrasilCRM:token', token],
      ['@RABrasilCRM:user', JSON.stringify(user)],
    ]);
    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@RABrasilCRM:token', '@RABrasilCRM:user']);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
