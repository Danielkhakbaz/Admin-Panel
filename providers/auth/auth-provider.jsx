import { useReducer } from "react";
import { AuthContext } from "providers/auth/auth-context";
import { AuthReducer } from "providers/auth/auth-reducer";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    phoneNumber: "",
    password: "",
  });

  return (
    <>
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
