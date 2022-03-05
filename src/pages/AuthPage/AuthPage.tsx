import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthForm } from "../../components/authForm/AuthForm";

import { AuthContext } from "../../context/authContext";
import { useHttp } from "../../hooks/http.hook";
import { login, loginError} from "../../redux/auth/actions";

export const AuthPage = () => {
  // const { loading, request } = useHttp();
  // const auth = useContext(AuthContext);
  // const selectData = useSelector(responseData);
  const dispatch = useDispatch();

  const loginHandler = (values: any) => {
    console.log('values: ', values);
    
    // if (selectData) {
      dispatch(login(values));
    // }
  };
  return <AuthForm isRegistration={false} handleSubmit={loginHandler} />;
};

// const loginHandler = async (values: {
//   email: string;
//   password: string;
// }) => {
//   try {
//     const { data }: any = await request("/api/auth/login", "POST", values);
//     console.log("data: ", data);
//     auth.login(data.token, data.userId);
//   } catch (e) {}
// };

// return <AuthForm isRegistration={false} handleSubmit={loginHandler} />;
// };
