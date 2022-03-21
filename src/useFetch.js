import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const abortConst = new AbortController();

        setTimeout(() => {
            fetch (endpoint, {signal: abortConst.signal})
            .then((res) => {
                if(!res.ok) {
                    throw Error ('could not fetch the resource')
                }
                return res.json(); 

            }).then ((data) => {
                setData(data);
                setIsPending(false)
                setError(null);

            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch error')
                } else {
                setIsPending(false);
                setError (err.message);
                }
            })
        }, 500);
            return () => abortConst.abort();
    }, [endpoint])
    return { data, isPending, error};
}
 
export default useFetch;