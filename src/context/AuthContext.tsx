import React, { createContext, useState, useContext, useEffect } from "react";
import { AuthorizationToken,AuthState } from "../Models/Auth";



const AuthContext = createContext<AuthState>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthorizationToken | null>(null);
  const [loading, setLoading] = useState(true); // <-- Add loading state

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const parsedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (parsedUser.token === storedToken) {
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
    setLoading(false); // <-- Mark loading complete
  }, []);

  const login = (tokenData: AuthorizationToken) => {
    localStorage.setItem("token", tokenData.token);
    localStorage.setItem("user", JSON.stringify(tokenData));
    setUser(tokenData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading ? children : <div>Loading...</div>} {/* Wait for loading */}
    </AuthContext.Provider>
  );
};