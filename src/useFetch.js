import { useEffect, useState } from "react";

export default function useFetch (url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);
    return [data];
}