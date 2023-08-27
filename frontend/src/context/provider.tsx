// Code referenced from: https://stackoverflow.com/questions/66001643/how-to-properly-store-access-token-in-memory-react

import React, { useContext, createContext, FC, useState } from "react";

type AccessTokenContext = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

const AccessTokenProvider: FC = (props) => {
  const [accessToken, setAccessToken] = useState<string>("null");
  return (
    <AccessToken.Provider value={[accessToken, setAccessToken]} {...props} />
  );
};

const AccessToken = createContext<AccessTokenContext>({} as AccessTokenContext);

const useAccessToken = (): AccessTokenContext =>
  useContext<AccessTokenContext>(AccessToken);

export { AccessTokenProvider, useAccessToken };
