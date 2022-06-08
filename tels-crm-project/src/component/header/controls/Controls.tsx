import React from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import useTranslate from "../../hooks/useTranslate";

import { ReactComponent as LogoutIcon } from "./../../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "./../../../assets/login.svg";

import c from "./Controls.module.scss";
import { Switch } from "@mui/material";
import useTheme from "../../hooks/useTheme";

const Controls: React.FC = () => {
    const { lang, setLang } = useTranslate();
    const { theme, setTheme } = useTheme();

    const nextLang = lang === "en" ? "ru" : "en";
    const nextTheme = theme === "dark" ? "" : "dark";

    const logged = useSelector(state => state.auth.logged);
    const { logout } = useActions();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={c.controls}>
            {logged ? (
                <>
                    <LogoutIcon className={c.logoutButton} onClick={handleLogout} />
                </>
            ) : (
                <Link to="/login">
                    <LoginIcon className={c.logoutButton} onClick={handleLogout} />
                </Link>
            )}
            <button className={c.langButton} onClick={() => setLang(nextLang)}>
                {nextLang}
            </button>
            <Switch color="warning" checked={nextTheme === "dark"} onChange={() => setTheme(nextTheme)} />
        </div>
    );
};

export default Controls;
