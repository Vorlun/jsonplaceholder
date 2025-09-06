import React from "react";
import Home from "./home";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Error10 from "./not-found";
import User from "./user";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<Error10 />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter;
