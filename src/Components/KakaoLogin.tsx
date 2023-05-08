import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice";
import { useAppDispatch } from "../Store/store";

const KakaoLogin = () => {
  const location = useLocation();
  const KakaoCode = location.search.split("=")[1];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", KakaoCode);
    if (localStorage.getItem("token") !== undefined) {
      navigate("/");
      dispatch(login());
    }
  }, []);

  return <div></div>;
};

export default KakaoLogin;
