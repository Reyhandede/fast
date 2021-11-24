import { useEffect } from 'react'

export default function Time({ setTimeOut, timeNext, setTimeNext }) {
    useEffect(() => {


        const interval = setInterval(() => {
            setTimeNext((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);

    }, [timeNext, setTimeOut]);

    return timeNext;


}
