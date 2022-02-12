import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useHttp } from "../../hooks/http.hook";
import { registr } from "../../redux/auth/actions";
import { AuthPage } from "../authPage/authPage";
import styles from "./styles.module.css";

const RegistrPage = () => {
  // const { loading, request } = useHttp();
  // const navigate = useNavigate();

  // const registerHandler = async (values: {
  //   email: string;
  //   password: string;
  // }) => {
  //   try {
  //     const data = await request("/api/auth/register", "POST", values);
  //     navigate("/login");
  //     console.log("Data:", data);
  //   } catch (e) {}
  // };

  const dispatch = useDispatch();

  const registrHandler = (values: any) => {
    console.log('values: ', values);
    
    
      dispatch(registr(values))}


  return <AuthForm isRegistration={true} handleSubmit={registrHandler} />
};

export default RegistrPage;
