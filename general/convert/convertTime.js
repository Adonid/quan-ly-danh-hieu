// Dayjs
import dayjs from "dayjs"
require ('dayjs/locale/vi')

/** Lay thoi gian tre tuong doi
 * 
 * @param {date} DATE
 * 
 * @returns {string} Day, date mouth year hour:minutes
 */
export const outOfDateRelative = (dateWorked, toQuota) => {
    dayjs.locale('vi')
    const dateQuota = dayjs(dateWorked).add(toQuota, 'year')
    const outOfYear = dayjs().diff(dateQuota, 'year', true)
    const outOfYearRound = dayjs().diff(dateQuota, 'year', false)
    if(outOfYear>=1){
        return "Khoảng "+outOfYearRound+" năm trước"
    }
    if(outOfYear<0){
        return "Chưa đủ thời gian nhận"
    }
    const outOfMouth = dayjs().diff(dateQuota, 'month', true)
    const outOfMouthRound = dayjs().diff(dateQuota, 'month', false)
    if(outOfMouth>=1){
        return "Khoảng "+outOfMouthRound+" tháng trước"
    }
    const outOfDay = dayjs().diff(dateQuota, 'day', true)
    const outOfDayRound = dayjs().diff(dateQuota, 'day', false)
    if(outOfDay>=1){
        return "Khoảng "+outOfDayRound+" ngày trước"
    }
    const outOfHour = dayjs().diff(dateQuota, 'hour', true)
    const outOfHourRound = dayjs().diff(dateQuota, 'hour', false)
    if(outOfHour>=1){
        return "Khoảng "+outOfHourRound+" giờ trước"
    }
    const outOfMinute = dayjs().diff(dateQuota, 'minute', true)
    const outOfMinuteRound = dayjs().diff(dateQuota, 'minute', false)
    if(outOfMinute>=1){
        return "Khoảng "+outOfMinuteRound+" phút trước"
    }
    return "Vừa mới"
}

/** Lay thoi gian tre chi tiet
 * 
 * @param {date} DATE
 * 
 * @returns {string} Day, date mouth year hour:minutes
 */
export const outOfDateDetail = (dateWorked, toQuota) => {
    dayjs.locale('vi')
    const dateQuota = dayjs(dateWorked).add(toQuota, 'year')
    if(dayjs().diff(dateQuota, 'year', true)>0)
        return dateQuota.format('dddd, D MMMM, YYYY')
    else
        return false
}