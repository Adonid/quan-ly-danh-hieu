// Moment js
import moment from "moment"

/**
 * FORMAT DATE TO VIETNAMESE
 */
 const formatToVietNamese =  str => str.replace("Sunday", "Chủ Nhật").replace("Monday", "Thứ Hai").replace("Tuesday", "Thứ Ba").replace("Wednesday", "Thứ Tư").replace("Thursday", "Thứ Năm").replace("Friday", "Thứ Sáu").replace("Saturday", "Thứ Bảy").replace("January", "Tháng 1").replace("February", "Tháng 2").replace("March", "Tháng 3").replace("April", "Tháng 4").replace("May", "Tháng 5").replace("June", "Tháng 6").replace("July", "Tháng 7").replace("August", "Tháng 8").replace("September", "Tháng 9").replace("October", "Tháng 10").replace("November", "Tháng 11").replace("December", "Tháng 12")

 /** RELATIVE TIME -> THOI GIAN TUONG DOI */
 const diffTime = time => {
    // Years
    if(time.indexOf('year') !== -1)
        return time.indexOf('years') !== -1 ? time.replace("years ago", "năm") : "1 năm"
    // Months
    if(time.indexOf('month') !== -1)
        return time.indexOf('months') !== -1 ? time.replace("months ago", "tháng") : "1 tháng"
    // Days
    if(time.indexOf('day') !== -1)
        return time.indexOf('days') !== -1 ? time.replace("days ago", "ngày") : "1 ngày"
    // Hours
    if(time.indexOf('hour') !== -1)
        return time.indexOf('hours') !== -1 ? time.replace("hours ago", "giờ") : "1 giờ"
    // Minutes
    if(time.indexOf('minute') !== -1)
        return time.indexOf('minutes') !== -1 ? time.replace("minutes ago", "phút") : "1 phút"
    // Seconds
    return "Vừa mới"
 }


/**
 * 
 * @param {date} DATE
 * 
 * @returns {string} Day, date mouth year hour:minutes
 */
export const detailTime = date => {
    const momentTime = moment(date, moment.DATETIME_LOCAL_SECONDS).add(+0, 'h')
    return formatToVietNamese(momentTime.format("dddd, HH:mm D MMMM, YYYY"))
}

/**
 * 
 * @param {date} DATE
 * 
 * @returns {string} Date mouth, year
 */
 export const detailSortTime = date => {
    const momentTime = moment(date, moment.DATETIME_LOCAL_SECONDS).add(+0, 'h')
    return formatToVietNamese(momentTime.format("D MMMM, YYYY"))
}

/**
 * 
 * @param {date} DATE
 * 
 * @returns {string} Day, date mouth year hour:minutes
 */
export const relativeTime = date => {
    const momentTime = moment(date, moment.DATETIME_LOCAL_MS).add(+0, 'h')
    return diffTime(momentTime.fromNow())
}