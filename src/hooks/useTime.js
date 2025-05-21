import moment from "moment";
import { useEffect, useState, useRef } from "react";

export const useTime = () => {
    const timer = useRef(null);
    const [time, setTime] = useState(moment().format("YYYY年MM月DD日 HH:mm:ss"));
    useEffect(() => {
        timer.current = setInterval(() => {
            setTime(moment().format("YYYY年MM月DD日 HH:mm:ss"));
        }, 1000);
        return () => {
            clearInterval(timer.current);
        };
    }, [time]);

    return {
        time
    }
}