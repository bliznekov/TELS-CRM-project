import React, { useState } from "react";
import FormValuesType from "../../types/FormValuesType";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import TextField from "../ui/textField/TextField";

const Login: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(values);
    };

    return (
        <FormCard header="Login">
            <TextField
                autofocus={true}
                label={"login"}
                type={"text"}
                name="login"
                values={values}
                setValues={setValues}
            />
            <TextField
                label={"password"}
                type={"password"}
                values={values}
                name="password"
                setValues={setValues}
            />
            <Button onClick={handleSubmit}>Login</Button>
        </FormCard>
    );
};

export default Login;
