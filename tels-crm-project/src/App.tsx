import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/header/Header";

import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <div className="container"></div>
            </div>
        </BrowserRouter>
    );
}

export default App;
