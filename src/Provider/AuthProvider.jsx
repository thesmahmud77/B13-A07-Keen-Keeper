import React, { useState } from "react";
import { AuthContext } from "./AuthContent";

const AuthProvider = ({ children }) => {
  const [friendInfo, setFriendInfo] = useState([]);
  console.log(friendInfo, "From AuthProvider page");
  const authInfo = {
    friendInfo,
    setFriendInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
