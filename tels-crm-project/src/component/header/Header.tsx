import React from "react";
import { Link, NavLink } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

import c from "./Header.module.scss";
import LogoIcon from "../../assets/logo.png";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";

const getLinks = (logged: boolean) => [
    { url: "/info", text: "nav.info" },
    ...(!logged ? [] : [{ url: "/trucks", text: "nav.trucks" }]),
];

const Header: React.FC = () => {
    const { t, lang, setLang } = useTranslate();
    const nextLang = lang === "en" ? "ru" : "en";

    const logged = useSelector((state) => state.auth.logged);
    const { logout } = useActions();
    const links = getLinks(logged);

    const handleLogout = () => {
        logout();
    };

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
                <div className={c.controls}>
                    {logged ? (
                        <>
                            <LogoutIcon
                                className={c.logoutButton}
                                onClick={handleLogout}
                            />
                        </>
                    ) : (
                        <Link to="/login">
                            <LoginIcon
                                className={c.logoutButton}
                                onClick={handleLogout}
                            />
                        </Link>
                    )}
                    <button
                        className={c.langButton}
                        onClick={() => setLang(nextLang)}
                    >
                        {nextLang}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
