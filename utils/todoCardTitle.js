import { dateDiff, dateFormatter } from "./dateUtils";

const todoCardTitle = (todoDate) => {
    const today = new Date();
    const datediff = dateDiff(today, todoDate)
    var result = ""
    switch (datediff) {
        case 0:
            result = `Today(${dateFormatter(new Date(todoDate))})`
            break;
        default:
            result = dateFormatter(new Date(todoDate))
    }
    return result
}

export default todoCardTitle