import React, { useEffect, useState } from "react";

const token = "c5da23c0-5569-4707-9e4a-d4d3777222a8";
const login = "t802_bra";
const pass = "onsta234";

type TruksType = {};

const URL =
    '?type=VEHICLE_LIST&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"';

const Truks: React.FC = () => {
    const [truks, setTruks] = useState<TruksType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(truks);
    }, [truks]);

    const fetchData = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const truks = data.root.result.items as TruksType[];
                setTruks(truks);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    return (
        <div>
            {loading && "Loading..."}
            {error && "Error..."}
        </div>
    );
};

export default Truks;
