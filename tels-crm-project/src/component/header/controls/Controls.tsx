import React from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import useTranslate from "../../hooks/useTranslate";

import { ReactComponent as LogoutIcon } from "./../../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "./../../../assets/login.svg";

import c from "./../Header.module.scss";

const Controls: React.FC = () => {
    const { lang, setLang } = useTranslate();
    const nextLang = lang === "en" ? "ru" : "en";

    const logged = useSelector((state) => state.auth.logged);
    const { logout } = useActions();

    const handleLogout = () => {
        logout();
    };

    return (
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
            <button className={c.langButton} onClick={() => setLang(nextLang)}>
                {nextLang}
            </button>
        </div>
    );
};

export default Controls;
