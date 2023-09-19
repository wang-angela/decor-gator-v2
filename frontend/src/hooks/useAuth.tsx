// Code referenced from: https://stackoverflow.com/questions/66001643/how-to-properly-store-access-token-in-memory-react

import React, { useContext, createContext, FC, useState } from "react";

type AuthContext = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const AuthProvider: FC = (props) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return <Authentication.Provider value={[isAuth, setIsAuth]} {...props} />;
};

const Authentication = createContext<AuthContext>({} as AuthContext);

const useAuth = (): AuthContext => useContext<AuthContext>(Authentication);

export { AuthProvider, useAuth };
