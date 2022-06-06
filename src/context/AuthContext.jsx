import React, { createContext ,useState} from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }){
  const [isAuth,setIsAuth]=useState(false);
  const handleToggleAuth =()=>{
    setIsAuth(!isAuth);
  }
  return (
    <AuthContext.Provider value={[isAuth, handleToggleAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
