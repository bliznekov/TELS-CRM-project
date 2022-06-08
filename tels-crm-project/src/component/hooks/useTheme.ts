import { useEffect, useState } from "react";

let theme: string | undefined = localStorage.getItem("theme") || undefined;

const useTheme = () => {
    const [themeState, setThemeState] = useState<string | undefined>(theme);
    useEffect(() => {
        if (theme) {
            document.body.dataset.theme = theme;
            setThemeState(theme);
        }
    }, []);

    const setTheme = (_theme: string) => {
        theme = _theme;
        document.body.dataset.theme = theme;
        localStorage.setItem("theme", theme);
        setThemeState(theme);
    };

    return {
        theme: themeState,
        setTheme,
    };
};

export default useTheme;
