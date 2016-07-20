require('babel-register');
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';


import '../vendors/prism.css';

import ExSource  from './code.js';

import Ex1 from './selectedDays/selectedDays.js';

import Ex2 from './canChangeMonth/canChangeMonth.js';


import Ex3 from './disabledDays/disabledDays.js';
import Ex4 from './rangeOfDays/rangeOfDays.js';
import Ex5 from './year/year.js';
import Ex6 from './fixWeek/fixWeek.js';
import Ex7 from './restrictMonth/restrictMonth.js';
import Ex8 from './modifiers/modifiers.js';



ReactDom.render(<div>
                    <Ex1></Ex1>
                    <ExSource name="selectedDays"></ExSource>
                </div>, document.getElementById('ex1'));
ReactDom.render(
                <div>
                    <Ex2></Ex2>
                    <ExSource name="canChangeMonth"></ExSource>
                </div>, document.getElementById('ex2'));
ReactDom.render(<div><Ex3></Ex3><ExSource name="disabledDays"></ExSource></div>, document.getElementById('ex3'));
ReactDom.render(<div><Ex4></Ex4><ExSource name="rangeOfDays"></ExSource></div>, document.getElementById('ex4'));
ReactDom.render(<div><Ex5></Ex5><ExSource name="year"></ExSource></div>, document.getElementById('ex5'));
ReactDom.render(<div><Ex6></Ex6><ExSource name="fixWeek"></ExSource></div>, document.getElementById('ex6'));
ReactDom.render(<div><Ex7></Ex7><ExSource name="restrictMonth"></ExSource></div>, document.getElementById('ex7'));
ReactDom.render(<div><Ex8></Ex8><ExSource name="modifiers"></ExSource></div>, document.getElementById('ex8'));