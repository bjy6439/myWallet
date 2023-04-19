import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Main from "./Main/Main";
import SignUp from "./SignUp/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
