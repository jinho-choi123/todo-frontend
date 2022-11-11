const leftPad = (value) => {
    if(value >= 10) {
        return value;
    } else {
        return `0${value}`;
    }
}

export const yesterday = (inputDate) => {
    const newDate = new Date(inputDate)
    newDate.setDate(newDate.getDate() - 1)
    return newDate
}

export const tomorrow = (inputDate) => {
    const newDate = new Date(inputDate)
    newDate.setDate(newDate.getDate() + 1)
    return newDate
}

export const dateFormatter = (inputDate) => {
    const year = inputDate.getFullYear();
    const month = leftPad(inputDate.getMonth() + 1)
    const day = leftPad(inputDate.getDate())

    return [year, month, day].join('-')
} 

export const dateCompare = (inputDate1, inputDate2) => {
    const year_compare = inputDate1.getFullYear() == inputDate2.getFullYear()
    const month_compare = inputDate1.getMonth() == inputDate2.getMonth()
    const day_compare = inputDate1.getDate() == inputDate2.getDate()
    return ((year_compare && month_compare) && day_compare)
}

export const dateDiff = (inputDate1, inputDate2) => {
    const input1_wo_time = new Date(inputDate1.getFullYear(), inputDate1.getMonth()+1, inputDate1.getDate())
    const input2_wo_time = new Date(inputDate2.getFullYear(), inputDate2.getMonth()+1, inputDate2.getDate())
    const result = (input1_wo_time.getTime() - input2_wo_time.getTime()) / (1000*3600*24)
    return result
}