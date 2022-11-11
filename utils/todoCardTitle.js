import { dateDiff, dateFormatter } from "./dateUtils";

const todoCardTitle = (todoDate) => {
    const today = new Date();
    const datediff = dateDiff(today, todoDate)
    var result = ""
    console.log(datediff)
    switch (datediff) {
        case 0:
            console.log("it's today!!!!!!!!!!!")
            result = `Today(${dateFormatter(new Date(todoDate))})`
            break;
        default:
            result = dateFormatter(new Date(todoDate))
    }
    return result
}

export default todoCardTitle