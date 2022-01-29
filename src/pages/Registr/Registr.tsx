import React from "react";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useHttp } from "../../hooks/http.hook";
import { AuthPage } from "../authPage/authPage";
import styles from "./registr.styles.module.css";

const Registration = () => {
  const { loading, request } = useHttp();

  const registerHandler = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const data = await request("/api/auth/register", "POST", values);
      console.log("Data:", data);
    } catch (e) {}
  };
  return <AuthForm isRegistration={true} handleSubmit={registerHandler} />;
};

export default Registration;
