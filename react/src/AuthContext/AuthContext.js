// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
 

// const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => { 
//    if (localStorage.getItem('isLoggedIn'))
//    {
//     if(localStorage.getItem('isLoggedIn')==='true'){
//     setIsLoggedIn(true)
//     }
//    }
  
//   }, []);


//   const login = () => {
//     localStorage.setItem('isLoggedIn', isLoggedIn.toString());
//     setIsLoggedIn(true);
//   };


//   const logout = () => {
//     localStorage.setItem('isLoggedIn','');
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout, }}> {children}</AuthContext.Provider>);};




import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => { 
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
   

