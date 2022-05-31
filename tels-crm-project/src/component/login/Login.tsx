import React, { useState } from "react";
import FormValuesType from "../../types/FormValuesType";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";
import useTranslate from "../hooks/useTranslate";

const Login: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});
    const { t } = useTranslate();
    const { createTokens } = useActions();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        createTokens(values);
        console.log(values);
        console.log(values);
        console.log(values);
    };

    return (
        <FormCard header={t("login.label")}>
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
            <Button onClick={handleSubmit}>{t("login.submit")}</Button>
        </FormCard>
    );
};

export default Login;
