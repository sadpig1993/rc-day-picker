import { expect } from 'chai';
import * as Utils  from '../src/Utils.js';


describe('UtilsTest', () => {
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

	// describe('addDayToRange设置一个日期范围', () => {
	// 	it('设置起始的日期', () => {
	// 		const day = new Date();
	// 		const range = Utils.addDayToRange(day);
	// 		expect(range).to.deep.equal({ from: day, to: null});
	// 	});

	// 	it('在已经有起始点后设置范围终点', () => {
	// 		const from = new Date(2016,0,1);
	// 		const to = new Date();
	// 		const range = Utils.addDayToRange(to, { from: from })
	// 		expect(range).to.deep.equal({ from, to: to });
	// 	});
	// 	it('再次设置同一天的话就初始化', () => {
	// 		const day = new Date();
	// 		let range = { from: day, to: day};
	// 		range = Utils.addDayToRange(day, range);
	// 		expect(range).to.deep.equal({
	// 			from: null,
	// 			to: null
	// 		});
	// 	});
	// 	it('如果已经有一个范围，选择了一天比起始点早，则重置起始点', () => {
	// 		const day = new Date(2016, 6, 1);
	// 		const to = new Date(2016, 6, 20);
	// 		let range = { from: new Date(2016, 6, 5), to };
	// 		range = Utils.addDayToRange(day, range);
	// 		expect(range).to.deep.equal({ 
	// 			from: day, 
	// 			to: to 
	// 		});
	// 	});

	// });
});