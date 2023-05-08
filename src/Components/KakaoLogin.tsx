import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice";
import { useAppDispatch } from "../Store/store";

const KakaoLogin = () => {
  const location = useLocation();
  const KakaoCode = location.search.split("=")[1];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await axios.post("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${KakaoCode}`,
        },
      });
      const userInfo = response.data;
      console.log(userInfo); // 받아온 사용자 정보 콘솔에 출력
      // 받아온 사용자 정보를 원하는 방식으로 처리해주세요.
    } catch (error) {
      console.error(error);
      // 에러 처리를 해주세요.
    }
  };

  getUserInfo();

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
