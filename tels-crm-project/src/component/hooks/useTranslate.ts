import { useEffect, useState } from "react";
import en from "./../../translations/en.json";
import ru from "./../../translations/ru.json";

type TranslateType = {
    [prop: string]: string;
};

type TranslatesType = {
    [prop: string]: TranslateType;
};

const translates: TranslatesType = { en, ru };

let lang: string = localStorage.getItem("lang") || "en";

let callbacks: Array<(lang: string) => void> = [];

const useTranslate = () => {
    const [langState, setLangState] = useState<string>(lang);
    useEffect(() => {
        callbacks.push(setLangState);

        return () => {
            callbacks = callbacks.filter((f) => f !== setLangState);
        };
    }, []);

    const setLang = (_lang: string) => {
        lang = _lang;
        localStorage.setItem("lang", lang);
        callbacks.forEach((callback) => callback(lang));
    };

    const t = (id: string): string => {
        const translate = translates[langState];
        return translate[id] ?? id;
    };

    return {
        lang: langState,
        setLang,
        t,
    };
};

export default useTranslate;
