'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekday = formatWeekday;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isDayInRange = isDayInRange;
exports.isDayBetween = isDayBetween;
exports.getModifiersForDay = getModifiersForDay;
exports.getWeekArray = getWeekArray;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDayNumOfMonth = getDayNumOfMonth;
exports.clone = clone;
var WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

var WEEKDAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_EN_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

var MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatMonthTitle(d) {
  return d.getFullYear() + '年 ' + MONTHS[d.getMonth()];
}

function formatWeekday(i) {
  return WEEKDAYS[i];
}

function formatWeekdayShort(i) {
  return WEEKDAYS_EN_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_EN[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

function addMonths(day, n) {
  var newDate = clone(day);
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
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if a day is included in a range of days.
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
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
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

function getWeekArray(day) {
  var firstDayOfWeek = arguments.length <= 1 || arguments[1] === undefined ? getFirstDayOfWeek() : arguments[1];

  var dayNumOfMonth = getDayNumOfMonth(day);
  var dayArray = [];

  for (var i = 1; i <= dayNumOfMonth; i++) {
    dayArray.push(new Date(day.getFullYear(), day.getMonth(), i, 12));
  }

  var week = [];
  var weekArray = [];
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

function getFirstDayOfMonth(day) {
  return new Date(day.getFullYear(), day.getMonth(), 1, 12);
}

function getDayNumOfMonth(day) {
  var resultDate = getFirstDayOfMonth(day);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function clone(day) {
  return new Date(day.getTime());
}

exports.default = {
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
};
//# sourceMappingURL=Utils.js.map