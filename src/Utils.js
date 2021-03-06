/**
* @file 组件工具函数
* @author sadpig
*/


// 星期文案
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

// 月份文案
const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'];

/**
 * 生成年月文案
 *
 * @param  {Date} 
 * @return {string} 返回对应文案
 */
export function formatMonthTitle(d) {
  return `${d.getFullYear()}年 ${MONTHS[d.getMonth()]}`;
}

/**
 * 获取星期文案
 *
 * @param  {number} i 星期几
 * @return {string} 返回对应文案
 */
export function formatWeekday(i){
    return WEEKDAYS[i];
}

/**
 * 获取星期文案
 *
 * @return {Array} 返回全部月份文案
 */
export function getMonths() {
    return MONTHS;
}


/**
 * 拷贝一个Date对象
 *
 * @param  {Date} day 要拷贝的Date对象
 * @return {Date} 返回的Date对象
 */
export function clone(day) {
    return new Date(day.getTime());
}


/**
 * 增加\减少某个Date对象的月份
 *
 * @param  {Date} day 要修改的Date对象
 * @param  {number} n 要增加\减少的月数
 * @return {Date} 返回的Date对象
 */
export function addMonths(day, n) {
    const newDate = clone(day);
    newDate.setMonth(day.getMonth() + n);
    return newDate;
}

/**
 * 判断两个日期是否是同一天
 *
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
export function isSameDay(d1, d2) {
    if (!d1 || !d2) {
        return false;
    }
    return d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();
}

/**
 * 判断一个日期是否在一个范围内（包含边界）
 *
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
export function isDayInRange(day, range) {
    const { from, to } = range;
    return (from && isSameDay(day, from)) ||
        (to && isSameDay(day, to)) ||
        (from && to && isDayBetween(day, from, to));
}

/**
 * 判断一个日期是否在另外两个日期之间
 * 不包含边界
 *
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
export function isDayBetween(d, d1, d2) {
    const date = clone(d);
    const date1 = clone(d1);
    const date2 = clone(d2);

    date.setHours(0, 0, 0, 0);
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return (date1 < date && date < date2) 
        || (date2 < date && date < date1);
}

/**
 * 获取一个日期所在的月份的第一天
 *
 * @param  {Date}  day
 * @return {Boolean}
 */
export function getFirstDayOfMonth(day) {
    return new Date(day.getFullYear(), day.getMonth(), 1, 12);
}

/**
 * 获取一个日期所在的月份的总天数
 *
 * @param  {Date}  day
 * @return {Boolean}
 */
export function getDayNumOfMonth(day) {
    const resultDate = getFirstDayOfMonth(day);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
}

/**
 * 把给定月份按星期的生成
 *
 * @param  {Date}  day
 * @param  {Number=} firstDayOfWeek 
 * @return {Array}
 */
export function getWeekArray(day, firstDayOfWeek = 0) {
    const dayNumOfMonth = getDayNumOfMonth(day);
    const dayArray = [];

    // 生成整个月的每一天的Date对象
    for (let i = 1 ; i <= dayNumOfMonth; i++) {
        dayArray.push(new Date(day.getFullYear(), day.getMonth(), i, 12))
    }

    // 一个星期的缓存数组
    let week = [];
    // 整个月份的星期数组
    const weekArray = [];

    // 遍历dayArray 分配到每个week数组里
    dayArray.forEach((day) => {
        if (week.length > 0 && day.getDay() === firstDayOfWeek) {
            weekArray.push(week);
            week = [];
        }
        week.push(day);
        if (dayArray.indexOf(day) === dayArray.length - 1) {
            weekArray.push(week);
        }
    });


    const firstWeek = weekArray[0];
    const startIndex = 7 - firstWeek.length;
    // 补全第一周的缺的上月日期
    for (let i = startIndex; i > 0; i--) {
        const outsideDate = clone(firstWeek[0]);
        outsideDate.setDate(firstWeek[0].getDate() - 1);
        firstWeek.unshift(outsideDate);
    }
    const lastWeek = weekArray[weekArray.length - 1];
    // 补全最后一周缺的下月的日期
    for (let i = lastWeek.length; i < 7; i++) {
        const outsideDate = clone(lastWeek[lastWeek.length - 1]);
        outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
        lastWeek.push(outsideDate);
    }

    return weekArray;
}


/**
 * 自定义修饰器函数判断
 *
 * @param  {Date}  day
 * @param  {Object} modifierFunctions 
 * @return {Array}
 */
export function getModifiersForDay(d, modifierFunctions = {}) {
    return Object.keys(modifierFunctions).reduce((modifiers, modifier) => {
        const func = modifierFunctions[modifier];
        if (func(d)) {
            modifiers.push(modifier);
        }

        return modifiers;
    }, []);
}

export default {
    formatMonthTitle,
    formatWeekday,
    getMonths,
    getWeekArray,
    addMonths,
    isSameDay,
    isDayInRange,
    getModifiersForDay
};
