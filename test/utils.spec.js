/* eslint-disable */
import { expect } from 'chai';
import * as Utils  from '../lib/Utils.js';


describe('UtilsTest', () => {
	describe('formatMonthTitle生成对应的月份文案', () => {
		it('文案对应', () => {
			const date = new Date(2016, 5, 2);
			const ret = Utils.formatMonthTitle(date);
			expect(ret).to.equal('2016年 六月');
		});
		it('一个月的两天生成的title应该一致', () => {
			const date = new Date(2016, 5, 2);
			const date2 = new Date(2016, 5, 1);
			const ret = Utils.formatMonthTitle(date);
			expect(ret).to.equal(Utils.formatMonthTitle(date2));
		});
	});

	describe('formatWeekday生成日期标题', () => {
		it('生成日-六的标题文案', () => {
			let ret = [];
			for (let i = 0; i < 7; i++) {
				ret.push(Utils.formatWeekday(i));
			}
			expect(ret.join('')).to.equal('日一二三四五六');	
		})
	});
	describe('getMonths', () => {
		it('生成1-12月文案', () => {
			let ret = [];
			let months = Utils.getMonths();
			for (let i = 0; i < months.length; i++) {
				ret.push(months[i]);
			}
			expect(ret.join('')).to.equal('一月二月三月四月五月六月七月八月九月十月十一月十二月');	
		})
	});

	describe('clone复制一个Date对象', () => {
		it('clone复制一个Date对象', () => {
			let date = new Date();
			let ret = Utils.clone(date);
			expect(ret.toGMTString()).to.equal(date.toGMTString());
		});
	});

	describe('addMonths', () => {
		it('日期+2个月', () => {
			const date = new Date(2016, 1);
			const ret = Utils.addMonths(date, 2);
			expect(ret.getMonth()).to.equal(date.getMonth() + 2);
		});
		it('1月日期减一个月，到上一年12月', () => {
			const date = new Date(2016, 0);
			const ret = Utils.addMonths(date, -1);
			expect(ret.getMonth()).to.equal(11);
		});
	});

	describe('isSameDay', () => {
		it('判断两个不同时间点是同一天', () => {
			const date1 = new Date(2016, 1, 1, 11, 5);
			const date2 = new Date(2016, 1, 1, 1, 5);
			const ret = Utils.isSameDay(date1, date2);
			expect(ret).to.be.true;
		});
		it('两个不同日期的时间点不是同一天', () => {
			const date1 = new Date(2016, 1, 1, 11, 5);
			const date2 = new Date(2016, 1, 2, 1, 5);
			const ret = Utils.isSameDay(date1, date2);
			expect(ret).to.be.false;
		});
		it('参数缺失则返回false', () => {
			const date1 = new Date(2016, 1, 1, 11, 5);

			const ret = Utils.isSameDay(date1, null);
			expect(ret).to.be.false;
		});
		it('参数缺失则返回false', () => {
			const date1 = new Date(2016, 1, 1, 11, 5);
			const ret = Utils.isSameDay(null, date1);
			expect(ret).to.be.false;
		});
	});

	describe('isDayInRange（判断一天是否在一个区间内，闭区间）', () => {
		it('检查某一天是否在两天之间', () => {
			const day = new Date(2016, 7, 15);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayInRange(day, { from, to });
			expect(isDayInRange).to.be.true;
		});
		it('检查某一天是否在两天之间（区间边界上）', () => {
			const day = new Date(2016, 7, 14);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayInRange(day, { from, to });
			expect(isDayInRange).to.be.true;
		});
		it('检查某一天是否在一个范围之外', () => {
			const day = new Date(2016, 7, 3);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayInRange(day, { from, to });
			expect(isDayInRange).to.be.false;
		});

	});


	describe('isDayBetween检查某一天是否在两天之间（开区间）', () => {
		it('检查某一天在两天之间，返回true', () => {
			const day = new Date(2016, 7, 15);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayBetween(day, from, to);
			expect(isDayInRange).to.be.true;
		});

		it('检查某一天在两天之间（参数乱序），返回true', () => {
			const day = new Date(2016, 7, 15);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayBetween(day, to, from);
			expect(isDayInRange).to.be.true;
		});

		it('某一天在一个范围的边界上，返回false', () => {
			const day = new Date(2016, 7, 14);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayBetween(day, from, to);
			expect(isDayInRange).to.be.false;
		});
		it('某一天不在某个范围内，返回false', () => {
			const day = new Date(2016, 7, 3);
			const from = new Date(2016, 7, 14);
			const to = new Date(2016, 7, 16);
			const isDayInRange = Utils.isDayBetween(day, from, to);
			expect(isDayInRange).to.be.false;
		});

	});
	describe('getFirstDayOfMonth获取某个月第一天', () => {
		it('获取某个月第一天', () => {
			const month = new Date();
			const ret = Utils.getFirstDayOfMonth(month);
			expect(ret.getDate()).to.equal(1);
		});
	});

	describe('getDayNumOfMonth获取某个月的总天数', () => {
		it('获取一个月的天数', () => {
			const day = new Date();
			const ret = Utils.getDayNumOfMonth(day);
			day.setDate(parseInt(ret) + 1)
			expect(day.getDate()).to.equal(1);
		});
	});

	describe('getWeekArray按星期分割每个月的天数', () => {
		it('按星期分割本月', () => {
			const day = new Date();
			const ret = Utils.getWeekArray(day);
			let index = -1;
			ret.forEach((v, k) => {
				v.forEach((v2, k2) => {
					if (v2.getDate() == day.getDate()) {
						index = k2;
					}
				});
			})
			expect(index).to.equal(day.getDay());
		});
	});

	describe('getModifiersForDay自定义修饰器判断', () => {
		it('自定义修饰器，返回selected修饰器', () => {
			let day = new Date(2016, 6, 20);
			let modifiers = {
				selected: (day) => {
					let day1 = new Date(2016, 6, 1);
					let day2 = new Date(2016, 6, 30);
					if (day > day1 && day < day2 ) {
						return true
					}else{
						return false
					}
				}
			}
			let ret = Utils.getModifiersForDay(day, modifiers);
			let name = ret.join('');
			let name_source = Object.keys(modifiers);
			expect(name).to.equal(name_source.join(''));
		});
		it('自定义修饰器，返回disabled修饰器', () => {
			let day = new Date(2016, 6, 20);
			let modifiers = {
				selected: (day) => {
					let day1 = new Date(2016, 6, 1);
					let day2 = new Date(2016, 6, 30);
					if (day < day1 && day < day2 ) {
						return true
					}else{
						return false
					}
				},
				disabled: (day) => {
					let day1 = new Date(2016, 6, 1);
					let day2 = new Date(2016, 6, 30);
					if (day > day1 && day < day2 ) {
						return true
					}else{
						return false
					}
				}
			}
			let ret = Utils.getModifiersForDay(day, modifiers);
			let name = ret.join('');
			expect(name).to.equal('disabled');
		});
		it('自定义修饰器，返回所有的修饰器', () => {
			let day = new Date(2016, 6, 20);
			let modifiers = {
				selected: (day) => {
					let day1 = new Date(2016, 6, 1);
					let day2 = new Date(2016, 6, 30);
					if (day > day1 && day < day2 ) {
						return true
					}else{
						return false
					}
				},
				disabled: (day) => {
					let day1 = new Date(2016, 6, 1);
					let day2 = new Date(2016, 6, 30);
					if (day > day1 && day < day2 ) {
						return true
					}else{
						return false
					}
				}
			}
			let ret = Utils.getModifiersForDay(day, modifiers);
			let name = ret.join('');
			let name_source = Object.keys(modifiers).join('');
			expect(name).to.equal(name_source);
		});
	});
});
/* eslint-disable */