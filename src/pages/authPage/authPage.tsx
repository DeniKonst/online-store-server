import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthForm } from "../../components/authForm/AuthForm";
import { AuthContext } from "../../context/authContext";
import { useHttp } from "../../hooks/http.hook";

export const AuthPage = () => {
  const { loading, request } = useHttp();
  const auth = useContext(AuthContext);

  const loginHandler = async (values: { email: string; password: string }) => {
    try {
      const {data}: any = await request("/api/auth/login", "POST", values);
      console.log('data: ', data)
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return <AuthForm isRegistration={false} handleSubmit={loginHandler} />;
};
