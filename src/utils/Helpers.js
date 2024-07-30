
//  Transforms Unix time to Day of week, day of the month, and the month
// Ex. Tuesday 30 July
export const unixToDate = (unixTime) => {
    const time = new Date(unixTime * 1000)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayOfWeek = weekDay[time.getDay()]
    const dayNumber = time.getDate()
    const month = months[time.getMonth()]

    return `${dayOfWeek} ${month} ${dayNumber}`
}

// Returns the string with its first letter as Uppercase
export const capitalizeFirst = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}