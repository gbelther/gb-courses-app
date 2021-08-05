import { useState } from "react";
import { createContext, ReactNode } from "react";

import Router from "next/router";

import firebase from "../services/firebase";

interface IUser {
  displayName: string;
  email: string;
  photoURL: string;
}

interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  signin: () => void;
  signout: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  const signin = () => {
    try {
      setLoading(true);
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((response) => {
          setUser(response.user);
          Router.push("/");
        });
    } finally {
      setLoading(false);
    }
  };
  const signout = () => {
    try {
      Router.push("/");

      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
