import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Info from "./component/info/Info";
import Login from "./component/login/Login";
import Truks from "./component/trucks/Truks";

import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <div className="center-content">
                    <Routes>
                        <Route path="/info" element={<Info />} />
                        <Route path="/truks" element={<Truks />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Navigate to={"/info"} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
