import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import DashBoard from "./Page/DashBoard";
import Main from "./Page/Main";
import SignUp from "./SignUp/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
