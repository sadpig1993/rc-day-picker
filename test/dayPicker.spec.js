/* eslint-disable */
import chai, { expect } from 'chai';
import DayPicker from '../lib/DayPicker.js';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { jsdom } from 'jsdom';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;



describe('DayPicker', () => {

    describe('渲染测试', () => {
        it('默认Props检查', () => {
            const dayPicker = <DayPicker />;
            const now = new Date();
            expect(dayPicker.props.initialMonth.getMonth()).to.equal(now.getMonth());
            expect(dayPicker.props.initialMonth.getYear()).to.equal(now.getYear());
            expect(dayPicker.props.numberOfMonths).to.equal(1);
            expect(dayPicker.props.canChangeMonth).to.equal(true);
            expect(dayPicker.props.fixedWeeks).to.equal(false);
            expect(dayPicker.props.modifiers).to.deep.equal({});
        })
        it('默认class检查', () => {
            const dayPicker = shallow(<DayPicker />);
            expect(dayPicker).to.have.className('DayPicker');
        });
        it('首次渲染把初始化月份设置为当前月份', () => {
            const wrapper = shallow(<DayPicker />);
            const instance = wrapper.instance();
            expect(instance.props.initialMonth.getFullYear()).to.equal(instance.state.currentMonth.getFullYear());
            expect(instance.props.initialMonth.getMonth()).to.equal(instance.state.currentMonth.getMonth());
        });
        it('渲染多个月份', () => {
            const wrapper = shallow(<DayPicker numberOfMonths={6} />);
            expect(wrapper.find('.DayPicker-Month')).to.have.length(6);
        });
        it('渲染完成后更改初始月份要求月份发生改变', () => {
            const wrapper = mount(<DayPicker />);
            wrapper.setProps({ initialMonth: new Date(2016, 1, 15) });
            const instance = wrapper.instance();
            expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
            expect(instance.state.currentMonth.getMonth()).to.equal(1);
        });
        it('能够自定义class', () => {
            const wrapper = shallow(<DayPicker className="test" />);
            expect(wrapper).to.have.className('test');
        });
        it('需要能够有navBar渲染', () => {
            const wrapper = render(<DayPicker />);
            expect(wrapper.find('.DayPicker-NavBar')).to.exist;
        });
        it('所有的Day的容器都要能够渲染出来', () => {
            const wrapper = render(<DayPicker initialMonth={new Date(2016, 6)} />);
            expect(wrapper.find('.DayPicker-Day')).to.have.length(42);
        });
        it('应该能够渲染排除outside', () => {
            const wrapper = render(<DayPicker initialMonth={new Date(2016, 6)} />);
            expect(wrapper.find('.DayPicker-Day--outside')).to.have.length(11);
        });
        it('如果设置不能改变月份,navbar应该为空', () => {
            const wrapper = render(<DayPicker canChangeMonth={false} />);
            expect(wrapper.find('.DayPicker-NavBar').children('span')).to.have.length(0);
        });
        it('如果设置能改变月份,navbar应该不为空', () => {
            const wrapper = render(<DayPicker canChangeMonth={true} />);
            expect(wrapper.find('.DayPicker-NavBar').children('span')).to.have.length(2);
        });
        it('不应该渲染多余的天数', () => {
            const wrapper = mount(<DayPicker initialMonth={new Date(2016, 6)} />);
            expect(wrapper.find('.DayPicker-Day').at(0)).to.have.text('');
            expect(wrapper.find('.DayPicker-Day').at(1)).to.have.text('');
            expect(wrapper.find('.DayPicker-Day').at(2)).to.have.text('');
            expect(wrapper.find('.DayPicker-Day').at(3)).to.have.text('');
            expect(wrapper.find('.DayPicker-Day').at(4)).to.have.text('');
        });
        it('需要把额外的日期渲染出来', () => {
            const wrapper = mount(<DayPicker fixedWeeks initialMonth={new Date(2016, 6)} />);
            expect(wrapper.find('.DayPicker-Day').at(0)).to.have.text('26');
            expect(wrapper.find('.DayPicker-Day').at(1)).to.have.text('27');
            expect(wrapper.find('.DayPicker-Day').at(2)).to.have.text('28');
            expect(wrapper.find('.DayPicker-Day').at(3)).to.have.text('29');
            expect(wrapper.find('.DayPicker-Day').at(4)).to.have.text('30');
        });
    });

    describe('自带修饰器、自定义修饰器测试', () => {
        it('添加自带选中日期修饰器，当月所有日期都被选中', () => {
            const wrapper = mount(<DayPicker initialMonth={new Date(2016, 6)} selectedDays={() => true} />);
            expect(wrapper.find('.DayPicker-Day--selected')).to.have.length(42);
        });
        it('添加自带禁止操作日期修饰器，当月所有日期都不可操作', () => {
            const wrapper = mount(<DayPicker initialMonth={new Date(2016, 6)} disabledDays={() => true} />);
            expect(wrapper.find('.DayPicker-Day--disabled')).to.have.length(42);
        });
        it('添加一个修饰器foo能够在className体现', () => {
            const wrapper = mount(<DayPicker initialMonth={new Date(2016, 6)} modifiers={{ foo: () => true }} />);
            expect(wrapper.find('.DayPicker-Day--foo')).to.have.length(42);
        });
    });

    describe('月份调整：showNextMonth()', () => {
        it('currentMonth要变成下个月', () => {
          const instance = shallow(
            <DayPicker
              initialMonth={new Date(2016, 6)}
              numberOfMonths={2}
            />
          ).instance();
          instance.showNextMonth();
          expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
          expect(instance.state.currentMonth.getMonth()).to.equal(7);
        });
    });
    describe('月份调整：showPreviousMonth()', () => {
        it('currentMonth要变成上个月', () => {
          const instance = shallow(
            <DayPicker
              initialMonth={new Date(2016, 6)}
              numberOfMonths={2}
            />
          ).instance();
          instance.showPreviousMonth();
          expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
          expect(instance.state.currentMonth.getMonth()).to.equal(5);
        });
    });
    describe('任意月份调整:ShowMonth()', () => {
        it('2016年7月', () => {
          const instance = shallow(
            <DayPicker
              initialMonth={new Date(2015, 6)}
              numberOfMonths={2}
            />
          ).instance();
          instance.showMonth(new Date(2016, 6, 1));
          expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
          expect(instance.state.currentMonth.getMonth()).to.equal(6);
          expect(instance.state.currentMonth.getDate()).to.equal(1);
        });
    });
    describe('事件处理eventHandlers', () => {

    });
    
});
/* eslint-disable */


