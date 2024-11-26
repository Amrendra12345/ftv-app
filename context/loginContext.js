import { createContext, useContext, useState } from "react";

export const LoginContext = createContext(null);
    export const useShowModel = ()=>{
        const  showModel  = useContext(LoginContext)
        return showModel
    }
    export const useUserInfo = ()=>{
        const  userInfo  = useContext(LoginContext)
        return userInfo
    }
   export const LoginDetail = ()=>{
        const  loginData  = useContext(LoginContext)
        return loginData
    }

export const LoginContextProvider = (props)=>{
     const[loginModel, setLoginModel] = useState(false);
     const[logininfo, setLoginInfo] = useState({})
     const[userData, setUserData] = useState({})
     return(
     <LoginContext.Provider value={{loginModel, setLoginModel, logininfo, setLoginInfo, userData, setUserData}}>{props.children}</LoginContext.Provider>
     )
}