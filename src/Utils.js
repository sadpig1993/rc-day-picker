const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

const WEEKDAYS_EN = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WEEKDAYS_EN_SHORT = ['Su', 'Mo', 'Tu',
    'We', 'Th', 'Fr', 'Sa'];

const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'];

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];


export function formatWeekday(i){
    return WEEKDAYS[i];
}

export function formatWeekdayShort(i) {
    return WEEKDAYS_EN_SHORT[i];
}

export function formatWeekdayLong(i) {
    return WEEKDAYS_EN[i];
}

export function getFirstDayOfWeek() {
    return 0;
}

export function getMonths() {
    return MONTHS;
}

export function addMonths(day, n) {
    const newDate = clone(day);
    newDate.setMonth(day.getMonth() + n);
    return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
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
 * Return `true` if a day is included in a range of days.
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
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
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

export function getModifiersForDay(d, modifierFunctions = {}) {
    return Object.keys(modifierFunctions).reduce((modifiers, modifier) => {
        const func = modifierFunctions[modifier];
        if (func(d)) {
            modifiers.push(modifier);
        }

        return modifiers;
    }, []);
}

export function getWeekArray(day, firstDayOfWeek = getFirstDayOfWeek()) {
    const dayNumOfMonth = getDayNumOfMonth(day);
    const dayArray = [];

    for (let i = 1 ; i <= dayNumOfMonth; i++) {
        dayArray.push(new Date(day.getFullYear(), day.getMonth(), i, 12))
    }

    let week = [];
    const weekArray = [];
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
    for (let i = startIndex; i > 0; i--) {
        const outsideDate = clone(firstWeek[0]);
        outsideDate.setDate(firstWeek[0].getDate() - 1);
        firstWeek.unshift(outsideDate);
    }

    const lastWeek = weekArray[weekArray.length - 1];
    for (let i = lastWeek.length; i < 7; i++) {
        const outsideDate = clone(lastWeek[lastWeek.length - 1]);
        outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
        lastWeek.push(outsideDate);
    }


    return {
        'weekArray': weekArray,
        'weekIndexRange': {
            'startIndex': startIndex,
            'endIndex': startIndex + dayNumOfMonth - 1
        }
    };
}

export function getFirstDayOfMonth(day) {
    return new Date(day.getFullYear(), day.getMonth(), 1, 12);
}

export function getDayNumOfMonth(day) {
    const resultDate = getFirstDayOfMonth(day);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
}

export function clone(day) {
    return new Date(day.getTime());
}

export default {
    formatWeekday,
    formatWeekdayShort,
    formatWeekdayLong,
    getFirstDayOfWeek,
    getMonths,
    getWeekArray,
    addMonths,
    isSameDay,
    isDayInRange,
    getModifiersForDay
};
