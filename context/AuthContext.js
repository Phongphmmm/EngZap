import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { getProgress, login } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const data = await getProgress(token);
          setUser({ token });
          setProgress(data.progress / 100);
          setStreak(data.streak);
        }
      } catch (error) {
        console.error("Load user failed:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const signIn = async (email, password) => {
    try {
      const token = await login(email, password);
      await AsyncStorage.setItem("token", token);
      const data = await getProgress(token);
      setUser({ token });
      setProgress(data.progress / 100);
      setStreak(data.streak);
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
    setProgress(0);
    setStreak(0);
  };

  return (
    <AuthContext.Provider
      value={{ user, progress, streak, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
