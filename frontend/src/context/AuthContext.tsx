"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { User } from "../models/User";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface AuthContextType {
  isLoading: boolean;
  logError: string | null;
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [logError, setLogError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Track initialization state

  const router = useRouter();

  // Use useEffect to initialize state from localStorage after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = Cookies.get("user");
      const storedToken = Cookies.get("token");

      if (storedUser && storedToken) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
        } catch (error) {
          console.error("Error parsing user from localStorage:", error);
          Cookies.remove("user");
          Cookies.remove("token");
        }
      }
      setIsLoading(false); 
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true); // Show loading spinner while fetching data
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { user, token } = data.data;
        setUser(user);
        setToken(token);
        Cookies.set("user", JSON.stringify(user),{expires:7});
        Cookies.set("token", token,{expires:7});
        setLogError(null); // Clear any previous errors
        setIsLoading(false); // Hide loading spinner
      } else {
        setLogError(data.message || "Login failed");
        throw new Error(data.message || "Login failed");
      }
    } catch (err) {
      setLogError((err as Error).message || "Login failed");
      setIsLoading(false); // Hide loading spinner
      throw err;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true); // Show loading spinner while fetching data
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      setIsLoading(false); // Hide loading spinner
      if (!response.ok) {

        console.error("Registration failed:", data);
        setIsLoading(false); // Hide loading spinner
        throw new Error(data.message || "Registration failed");
        
      }
    } catch (err) {
      setLogError((err as Error).message || "Registration failed");
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove("user");
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoading,logError, user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};