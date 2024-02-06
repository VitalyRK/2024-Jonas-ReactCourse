import { createContext, ReactNode, useContext, useReducer } from 'react';

interface IState {
  user: null | IUser;
  isAuthenticated: boolean;
  wrongLogin: boolean;
}

interface IContext extends IState {
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const AuthContext = createContext<IContext | null>(null);

const initialState: IState = {
  user: null,
  isAuthenticated: false,
  wrongLogin: false,
};

const FAKE_USERS = [
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: 'qwerty',
    avatar: 'https://i.pravatar.cc/100?u=zz',
  },
];

export type Action =
  | { type: 'login'; payload: IUser }
  | { type: 'logout' | 'wrong/login' };

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        wrongLogin: false,
      };
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case 'wrong/login':
      return {
        ...state,
        wrongLogin: true,
      };
    default:
      throw new Error('Incorrect action type');
  }
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuthenticated, wrongLogin }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email: string, password: string) {
    const user = FAKE_USERS.find((user) => {
      if (user.email === email && user.password === password) return user;
    });
    if (user) dispatch({ type: 'login', payload: user });
    if (!user) dispatch({ type: 'wrong/login' });
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        wrongLogin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext undefined');
  }

  return context;
}

export { AuthProvider, useAuth };
