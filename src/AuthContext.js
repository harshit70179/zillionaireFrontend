
import { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("jwtToken")?true:false);
  const [wishList,SetWishList]=useState(localStorage.getItem("wishList")?JSON.parse(localStorage.getItem("wishList")):[])

 useEffect(() => {
  if(localStorage.getItem("jwtToken")){
    setAuthenticated(true);
  }
 }, [authenticated])

  const login = () => {
    // Implement your authentication logic here
    setAuthenticated(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setAuthenticated(false);
    SetWishList([])
    localStorage.removeItem("wishList")
  }; 

  const handleWishlist=(id)=>{
    // SetWishList([...wishList,id])
    const index = wishList.indexOf(id);
    if (index !== -1) {
        // If exists, remove it
        const updatedIds = [...wishList];
        updatedIds.splice(index, 1);
        SetWishList(updatedIds);
    } else {
        // If doesn't exist, add it
        SetWishList([...wishList, id]);
    }
  }

  const handleSetWishlist=(wishList)=>{
    SetWishList(wishList)
  }
  useEffect(()=>{
    if(wishList && authenticated){
      localStorage.setItem("wishList",JSON.stringify(wishList))
    }
  },[wishList])
  
  return (
    <AuthContext.Provider value={{ authenticated, login, logout,wishList,handleWishlist,handleSetWishlist }}>
      {children}
    </AuthContext.Provider>
  );
};