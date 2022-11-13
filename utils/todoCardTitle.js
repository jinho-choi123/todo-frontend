import { useEffect, useState } from "react";
import { dateDiff, dateFormatter } from "./dateUtils";

const todoCardTitle = (todoDate) => {
    const today = new Date();
    let cardTitle = ''
    const datediff = dateDiff(today, todoDate)
    switch (datediff) {
        case 0:
            cardTitle = `Today(${dateFormatter(new Date(todoDate))})`
            break;
        default:
            cardTitle = dateFormatter(new Date(todoDate))
        }

    return cardTitle
}

export default todoCardTitle