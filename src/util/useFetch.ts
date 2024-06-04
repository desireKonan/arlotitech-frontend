import { useState, useEffect } from "react";
import axiosServices from "./axios";

const useFetch = <T>(url: string = "", initialData: T) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T>(initialData);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async (_url: string) => {
            try {
                const response = await axiosServices.get(_url);
                if(response.status === 200) {
                    setData(response.data);
                    console.log(response.data);
                }
            } catch(err) {
                setError(`Error: ${error}`);
            }
            setLoading(false);
        }

        setLoading(true);
        setData(initialData);
        setError("");
        fetchData(url);
    }, []);

    return { data, error, loading, setData };
}

export default useFetch;