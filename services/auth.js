import { API_URL } from "../constants/API";

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Login failed");
    return data.token;
  } catch (error) {
    throw error;
  }
};

export const getProgress = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/progress`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch progress");
    return data;
  } catch (error) {
    throw error;
  }
};
