import { useEffect } from 'react'

export default function Time({ setTimeOut, questionNumber, timePrev, setTimePrev }) {
    useEffect(() => {

        if (timePrev === 0) return setTimeOut(true);
        const interval = setInterval(() => {
            setTimePrev((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);

    }, [timePrev, setTimeOut]);
    useEffect(() => {
        setTimePrev(30);
    }, [questionNumber]);
    return timePrev;


}
