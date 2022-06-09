import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "../../hooks/useSelector";
import useTranslate from "../../hooks/useTranslate";

import c from "./Navigation.module.scss";

const getLinks = (logged: boolean) => [
    { url: "/info", text: "nav.info" },
    ...(!logged ? [] : [{ url: "/trucks", text: "nav.trucks" }]),
];

const Navigation: React.FC = () => {
    const { t } = useTranslate();

    const logged = useSelector(state => state.auth.logged);
    const links = getLinks(logged);

    return (
        <ul className={c.links}>
            {links.map(({ url, text }) => (
                <li key={url + text}>
                    <NavLink to={url} className={({ isActive }) => (isActive ? c.active : "")}>
                        {t(text)}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
