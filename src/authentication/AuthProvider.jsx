import { getAuth } from "firebase/auth";
import { app } from "../FireBase/FireBase.config";
import { createContext } from "react";
export const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = () => {


    
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;