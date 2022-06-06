import React from "react";
import Navigation from "./navigation/Navigation";

import LogoIcon from "../../assets/logo.png";

import c from "./Header.module.scss";
import Controls from "./controls/Controls";

const Header: React.FC = () => {
    return (
        <nav className={c.headerContainer}>
            <div className={c.container}>
                <div className={c.logo}>
                    <img className={c.img} src={LogoIcon} alt={"TELS CARGO"} />
                    <div className={c.appName}>TELS CARGO</div>
                </div>
                <Navigation />
                <Controls />
            </div>
        </nav>
    );
};

export default Header;
