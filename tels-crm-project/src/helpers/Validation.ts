export const getLoginError = (value: string): boolean => {
    let re = /^[A-Za-z0-9]{2,10}$/;
    return !re.test(value) ? true : false;
};

export const getPasswordError = (value: string): boolean => {
    let re = /^[A-Za-z0-9]{4,10}$/;
    return !re.test(value) ? true : false;
};
