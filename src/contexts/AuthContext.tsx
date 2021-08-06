import { useState, useEffect, createContext, ReactNode } from "react";

import Router from "next/router";

import firebase from "../services/firebase";

interface IUser {
  uid: string;
  name: string;
  email: string;
  avatar: string;
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
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;

        if (displayName && email) {
          setUser({
            uid,
            name: displayName,
            email,
            avatar: photoURL ?? "",
          });
        } else {
          throw new Error("Missing information from authentication.");
        }
      }
    });
  }, []);

  const handleUser = (userInformations: firebase.User) => {
    if (userInformations) {
      const { uid, displayName, email, photoURL } = userInformations;

      if (displayName && email) {
        setUser({
          uid,
          name: displayName,
          email,
          avatar: photoURL ?? "",
        });
      } else {
        throw new Error("Missing information from authentication.");
      }
    }
  };

  const signin = async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider());

      if (response.user) {
        handleUser(response.user);
      }
    } finally {
      setLoading(false);
    }
  };
  const signout = () => {
    try {
      Router.push("/");

      return firebase.auth().signOut();
      // .then(() => setUser());
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
