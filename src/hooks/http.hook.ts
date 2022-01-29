import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import baseAxiosInstance from "../api/api";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // fetch(url, {
  //   method,
  //   body: JSON.stringify(body),
  //   headers,
  // });
  // const data = await responce.json();
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const responce = await baseAxiosInstance.post(url, body);

        if (!responce) {
          throw new Error("Что-то пошло не так");
        }
        setLoading(false);
        return responce;
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = () => setError(null);

  return { loading, request, error, clearError };
};
