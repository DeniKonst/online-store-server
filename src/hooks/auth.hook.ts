import { type } from "os";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const login = useCallback((jwtToken?: string, id?: string) => {
    if (jwtToken && id) {
      setToken(jwtToken);
      setUserId(id);

      localStorage.setItem(storageName, JSON.stringify({ token: jwtToken, userId: id }));
    }

  }, []);

  const logaut = useCallback(() => {
    setToken('');
    setUserId('');
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem(storageName);
    if (userData) {
      const data = JSON.parse(userData);

      if (data && data.token) {
        login(data.token, data.userId);
      }
    }
  }, [login]);

  return { login, logaut, token, userId };
};
