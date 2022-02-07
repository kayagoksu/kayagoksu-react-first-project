import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import SignIn from "./SignIn";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
