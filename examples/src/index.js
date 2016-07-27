import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Prism from './vendors/prism';
import './vendors/prism.css';
import './index.css';

import SimpleCalendar from './demos/simple.js';

const Examples_list = {
    SimpleCalendar: {
        title: '简单日历demo',
        component : SimpleCalendar
    }
};


class Examples extends Component {


    render() {
        return (
            <div>
                <div className="Header">
                    <h1>rc-day-picker</h1>
                </div>
                <div className="Examples">
                    <div className="Examples-component">
                        <Examples_list.SimpleCalendar.component />
                    </div>
                </div>
            </div>
        );
    }

}


ReactDOM.render(<Examples />, document.getElementById('root'));