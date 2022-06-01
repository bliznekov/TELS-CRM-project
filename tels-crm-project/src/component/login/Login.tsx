import React, { useState } from "react";
import { getLoginError, getPasswordError } from "../../helpers/Validation";
import FormValuesType from "../../types/FormValuesType";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";
import useTranslate from "../hooks/useTranslate";

import c from "./Login.module.scss";

const Login: React.FC = () => {
    const [values, _setValues] = useState<FormValuesType>({});
    const [validationsError, setValidationsError] = useState("");

    const { t } = useTranslate();

    const { createTokens, setAuthError, setAuthStatus } = useActions();

    const loading = useSelector((state) => state.auth.loading);
    const serverError = useSelector((state) => state.auth.error);
    const authError = useSelector((state) => state.auth.status);
    const error: string =
        validationsError ||
        (serverError ? "Ошибка сервера" : "") ||
        (authError === "AUTHORIZATION_FAILED"
            ? "Неверный логин или пароль"
            : "");

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const validationError =
            getLoginError(values.login) || getPasswordError(values.password);
        if (validationError) {
            setValidationsError(validationError);
        } else {
            createTokens(values);
        }
    };

    const setValues = (
        callback: (prevValue: FormValuesType) => FormValuesType
    ) => {
        _setValues(callback);
        setValidationsError("");
        setAuthError(false);
        setAuthStatus("");
    };

    return (
        <div className={c.formContainer}>
            <FormCard header={t("login.label")} loading={loading}>
                <FormTextField
                    autofocus={true}
                    label={t("login.login")}
                    type={"text"}
                    name="login"
                    values={values}
                    setValues={setValues}
                />
                <FormTextField
                    label={t("login.password")}
                    type={"password"}
                    values={values}
                    name="password"
                    setValues={setValues}
                />
                {error && <div className="form-error">{error}</div>}
                <Button onClick={handleSubmit}>{t("login.submit")}</Button>
            </FormCard>
        </div>
    );
};

export default Login;
