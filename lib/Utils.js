'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekday = formatWeekday;
exports.getMonths = getMonths;
exports.clone = clone;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isDayInRange = isDayInRange;
exports.isDayBetween = isDayBetween;
<<<<<<< HEAD
exports.getModifiersForDay = getModifiersForDay;
exports.getWeekArray = getWeekArray;
=======
>>>>>>> goodCoder
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDayNumOfMonth = getDayNumOfMonth;
exports.getWeekArray = getWeekArray;
exports.getModifiersForDay = getModifiersForDay;
/**
* @file 组件工具函数
* @author xijiawei@baidu.com
*/

// 星期文案
var WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

// 月份文案
var MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

<<<<<<< HEAD
var MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

=======
/**
 * 生成年月文案
 *
 * @param  {Date} 
 * @return {string} 返回对应文案
 */
>>>>>>> goodCoder
function formatMonthTitle(d) {
    return d.getFullYear() + '年 ' + MONTHS[d.getMonth()];
}

/**
 * 获取星期文案
 *
 * @param  {number} i 星期几
 * @return {string} 返回对应文案
 */
function formatWeekday(i) {
    return WEEKDAYS[i];
}

/**
 * 获取星期文案
 *
 * @return {Array} 返回全部月份文案
 */
function getMonths() {
    return MONTHS;
}

/**
 * 拷贝一个Date对象
 *
 * @param  {Date} day 要拷贝的Date对象
 * @return {Date} 返回的Date对象
 */
function clone(day) {
    return new Date(day.getTime());
}

/**
 * 增加\减少某个Date对象的月份
 *
 * @param  {Date} day 要修改的Date对象
 * @param  {number} n 要增加\减少的月数
 * @return {Date} 返回的Date对象
 */
function addMonths(day, n) {
    var newDate = clone(day);
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
function isSameDay(d1, d2) {
    if (!d1 || !d2) {
        return false;
    }
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * 判断一个日期是否在一个范围内（包含边界）
 *
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
    var from = range.from;
    var to = range.to;

    return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
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
function isDayBetween(d, d1, d2) {
    var date = clone(d);
    var date1 = clone(d1);
    var date2 = clone(d2);

    date.setHours(0, 0, 0, 0);
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1 < date && date < date2 || date2 < date && date < date1;
}

<<<<<<< HEAD
function getModifiersForDay(d) {
  var modifierFunctions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
=======
/**
 * 获取一个日期所在的月份的第一天
 *
 * @param  {Date}  day
 * @return {Boolean}
 */
function getFirstDayOfMonth(day) {
    return new Date(day.getFullYear(), day.getMonth(), 1, 12);
}

/**
 * 获取一个日期所在的月份的总天数
 *
 * @param  {Date}  day
 * @return {Boolean}
 */
function getDayNumOfMonth(day) {
    var resultDate = getFirstDayOfMonth(day);
>>>>>>> goodCoder

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
function getWeekArray(day) {
    var firstDayOfWeek = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    var dayNumOfMonth = getDayNumOfMonth(day);
    var dayArray = [];

    // 生成整个月的每一天的Date对象
    for (var i = 1; i <= dayNumOfMonth; i++) {
        dayArray.push(new Date(day.getFullYear(), day.getMonth(), i, 12));
    }

    // 一个星期的缓存数组
    var week = [];
    // 整个月份的星期数组
    var weekArray = [];

    // 遍历dayArray 分配到每个week数组里
    dayArray.forEach(function (day) {
        if (week.length > 0 && day.getDay() === firstDayOfWeek) {
            weekArray.push(week);
            week = [];
        }
        week.push(day);
        if (dayArray.indexOf(day) === dayArray.length - 1) {
            weekArray.push(week);
        }
    });

    var firstWeek = weekArray[0];
    var startIndex = 7 - firstWeek.length;
    // 补全第一周的缺的上月日期
    for (var _i = startIndex; _i > 0; _i--) {
        var outsideDate = clone(firstWeek[0]);
        outsideDate.setDate(firstWeek[0].getDate() - 1);
        firstWeek.unshift(outsideDate);
    }
<<<<<<< HEAD
  });

  var firstWeek = weekArray[0];
  var startIndex = 7 - firstWeek.length;
  for (var _i = startIndex; _i > 0; _i--) {
    var outsideDate = clone(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2++) {
    var _outsideDate = clone(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  return weekArray;
}
=======

    var lastWeek = weekArray[weekArray.length - 1];
    // 补全最后一周缺的下月的日期
    for (var _i2 = lastWeek.length; _i2 < 7; _i2++) {
        var _outsideDate = clone(lastWeek[lastWeek.length - 1]);
        _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
        lastWeek.push(_outsideDate);
    }
>>>>>>> goodCoder

    return weekArray;
}

/**
 * 自定义修饰器函数判断
 *
 * @param  {Date}  day
 * @param  {Object} modifierFunctions 
 * @return {Array}
 */
function getModifiersForDay(d) {
    var modifierFunctions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return Object.keys(modifierFunctions).reduce(function (modifiers, modifier) {
        var func = modifierFunctions[modifier];
        if (func(d)) {
            modifiers.push(modifier);
        }

        return modifiers;
    }, []);
}

exports.default = {
<<<<<<< HEAD
  // formatMonthTitle,
  formatWeekday: formatWeekday,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths,
  getWeekArray: getWeekArray,
  addMonths: addMonths,
  isSameDay: isSameDay,
  isDayInRange: isDayInRange,
  getModifiersForDay: getModifiersForDay
=======
    formatMonthTitle: formatMonthTitle,
    formatWeekday: formatWeekday,
    getMonths: getMonths,
    getWeekArray: getWeekArray,
    addMonths: addMonths,
    isSameDay: isSameDay,
    isDayInRange: isDayInRange,
    getModifiersForDay: getModifiersForDay
>>>>>>> goodCoder
};
//# sourceMappingURL=Utils.js.map