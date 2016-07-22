# rc-day-picker
Day picker component of react

[![npm version](https://img.shields.io/npm/v/rc-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/rc-day-picker)
[![Bower](https://img.shields.io/bower/v/rc-day-picker.svg?style=flat-square)](http://bower.io/search/?q=rc-day-picker)
[![Build Status](https://travis-ci.org/sadpig1993/rc-day-picker.svg?branch=master)](https://travis-ci.org/sadpig1993/rc-day-picker)
<p align="center">
	<img width="359" src="http://sadpig1993.com/rc-day-picker/docs/images/A193E80D-7103-4198-B382-4FB1C93630C4.png" alt="">
</p>



[Examples](http://sadpig1993.com/rc-day-picker/examples/)


## Install

**Install via npm**

```
npm install rc-day-picker --save
```

**Install via Bower**

```
bower install rc-day-picker --save
```


**Build libs**

```
npm run build
```


### Example

```javascript
import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Demo extends Component {

	constructor(...args) {
		super(...args);
		this.onDayClickHandler = this.onDayClickHandler.bind(this);
	}

	state = {
		selectedDay: null
	};

	onDayClickHandler(e, day, modifilers) {
		if (modifilers.disabled) {
			return;
		}
		this.setState({
	    	selectedDay: modifilers.selected ? null : day,
	    });
	}

	render() {
		const { selectedDay } = this.state;
		return (<DayPicker 
			numberOfMonths = {1} 
			canChangeMonth = {true} 
			selectedDays = {day => Utils.isSameDay(selectedDay, day)}
			fixedWeeks = {true}
			onDayClick = {this.onDayClickHandler}
		/>);
	}
}

ReactDom.render(<Demo></Demo>, document.getElementById('root'));
```