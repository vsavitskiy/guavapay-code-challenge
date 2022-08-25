import React, {useMemo, useState} from "react";

type QueryProviderProps = {
  children: React.ReactNode,
}

type ContextType = {
  queryString: string,
  setQueryString: React.Dispatch<React.SetStateAction<string>>,
}

const defaultValue = {
  queryString: '',
  setQueryString: () => {},
};

export const QueryString = React.createContext<ContextType>(defaultValue);
export const QueryStringProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const [queryString, setQueryString] = useState('');

  const value = useMemo(
    () => ({
      queryString,
      setQueryString,
    }),
    [queryString]
  );

  return (
    <QueryString.Provider value={value}>
      {children}
    </QueryString.Provider>
  );
}
