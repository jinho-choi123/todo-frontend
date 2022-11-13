import { useEffect, useState } from "react";
import { dateDiff, dateFormatter } from "./dateUtils";

const todoCardTitle = (todoDate) => {
    const today = new Date();
    const [result, setResult] = useState('')
    const datediff = dateDiff(today, todoDate)
    useEffect(() => {
        switch (datediff) {
            case 0:
                setResult(`Today(${dateFormatter(new Date(todoDate))})`)
                break;
            default:
                setResult(dateFormatter(new Date(todoDate)))
        }
    }, [])
    
    return result
}

export default todoCardTitle