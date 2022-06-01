export const getLoginError = (value: string): string => {
    return value.length < 3 ? "Login is not valid" : "";
};

export const getPasswordError = (value: string): string => {
    return value.length < 4 ? "Password is not valid" : "";
};
