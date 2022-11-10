import { dateDiff } from "./dateUtils";

const todoCardTitle = (todoDate) => {
    const today = new Date();
    const datediff = dateDiff(today, todoDate)
    var result = ""

    switch (datediff) {
        case -1:
            result = "Tomorrow"
        case 0:
            result = "Today"
        case 1:
            result = "Yesterday"
        default:
            if(datediff > 0) {
                result = "+"+ datediff.toString() + " Days"
            } else {
                result = datediff.toString() + " Days"
            }
    }
    return result
}

export default todoCardTitle