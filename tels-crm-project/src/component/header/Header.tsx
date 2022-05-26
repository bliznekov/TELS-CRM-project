import React from "react";
import { NavLink } from "react-router-dom";

import c from "./Header.module.scss";
import LogoIcon from "../../assets/logo.png";

const getLinks = [
    { url: "/info", text: "Info" },
    { url: "/login", text: "Login" },
];

const Header: React.FC = () => {
    const links = getLinks;

    return (
        <nav className={c.headerContainer}>
            <div className={c.container}>
                <div className={c.logo}>
                    <img className={c.img} src={LogoIcon} alt={"TELS CARGO"} />
                    <div className={c.appName}>TELS CARGO</div>
                </div>

                <ul className={c.links}>
                    {links.map(({ url, text }) => (
                        <li key={url + text}>
                            <NavLink
                                to={url}
                                className={({ isActive }) =>
                                    isActive ? c.active : ""
                                }
                            >
                                {text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
