import { getLoginError } from "../Validation";

describe("Get Login error", () => {
    describe("Invalid", () => {
        const values = ["Вася", "Даша19", "19Катя", "Li", "Shmateleningraffe"];

        values.forEach((login, i) => {
            test(`${i}. Login - ${login}`, () => {
                const result = getLoginError(login);

                expect(result).toBeTruthy();
            });
        });
    });

    describe("Valid", () => {
        const values = ["Kate", "Kate19", "19Riotr"];

        values.forEach((login, i) => {
            test(`${i}. Login - ${login}`, () => {
                const result = getLoginError(login);

                expect(result).toBeFalsy();
            });
        });
    });
});
