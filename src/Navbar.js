import React, { Component, PropTypes } from 'react';


export default class Navbar extends Component {
    static propTypes = {
        date: PropTypes.instanceOf(Date),
        className: PropTypes.string,
        showPreviousButton: PropTypes.bool,
        showNextButton: PropTypes.bool,
        onPreviousClick: PropTypes.func,
        onNextClick: PropTypes.func
    };

    static defaultProps = {
        className: 'DayPicker-NavBar',
        showPreviousButton: true,
        showNextButton: true
    };

    render() {
        const buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';
        const {
            className, 
            showNextButton, 
            showPreviousButton, 
            onPreviousClick, 
            onNextClick
        } = this.props;

        const previousButton = showPreviousButton &&
            <span
                role="button"
                key="previous"
                className={`${buttonBaseClass}--prev`}
                onClick={() => onPreviousClick()}
            />;

        const nextButton = showNextButton &&
            <span 
                role="button"
                key="right"
                className={`${buttonBaseClass}--next`}
                onClick={() => onNextClick()}
            />;

        return(
            <div className={className}>
                {previousButton}
                {nextButton}
            </div>
        );
    }
}