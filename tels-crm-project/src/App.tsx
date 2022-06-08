import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Info from "./component/info/Info";
import Login from "./component/login/Login";
import Truks from "./component/trucks/Truks";
import TruckCard from "./component/truckCard/TruckCard";

import "./App.scss";
import { useSelector } from "./component/hooks/useSelector";

function App() {
    const logged = useSelector(state => state.auth.logged);

    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <div className="center-content">
                    <Routes>
                        {!logged && (
                            <>
                                <Route path="/login/*" element={<Login />} />
                            </>
                        )}
                        {logged && (
                            <Route path="/trucks/">
                                <Route index element={<Truks />} />
                                <Route path=":id" element={<TruckCard />} />
                            </Route>
                        )}
                        <Route path="/info" element={<Info />} />

                        <Route path="*" element={<Navigate to={"/info"} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
