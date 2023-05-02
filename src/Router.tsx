import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogin from "./Components/KakaoLogin";
import Navigation from "./Components/Navigation";
import Login from "./Login/Login";
import AllBoard from "./Page/AllBoard";
import Main from "./Page/Main";
import SignUp from "./SignUp/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<AllBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/oauth" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
