import { useEffect, useState } from "react";

const useRequest = <T>(defValue: T, url: string) => {
    const [mass, setMass] = useState<T>(defValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = () => {
        setLoading(true);
        setMass(defValue);
        setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const mass = data.root.result.items as T;
                    setMass(mass);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    };

    return { mass, loading, error };
};

export default useRequest;
