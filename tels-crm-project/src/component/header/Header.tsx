import React from "react";
import { NavLink } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

import c from "./Header.module.scss";
import LogoIcon from "../../assets/logo.png";

const getLinks = [
    { url: "/info", text: "nav.info" },
    { url: "/login", text: "nav.login" },
];

const Header: React.FC = () => {
    const { t, lang, setLang } = useTranslate();
    const nextLang = lang === "en" ? "ru" : "en";
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
                                {t(text)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button
                    className={c.langButton}
                    onClick={() => setLang(nextLang)}
                >
                    {nextLang}
                </button>
            </div>
        </nav>
    );
};

export default Header;
