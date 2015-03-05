import React from 'react';
import moment from 'moment';


let Day = React.createClass({
    render() {
        let classes = ['Day'];
        if (this.props.actual.isSame(this.props.date, 'day')) {
            classes.push('actual');
        }
        return (
            <td className={classes.join(' ')}
                data-date={this.props.date.format('DD/MM/YYYY')}
                onClick={this.props.handleClick}>
                {this.props.date.format('D')}
            </td>
        );
    }
});

let DayOfWeek = React.createClass({
    render() {
        let classes = ['DayOfWeek'];
        return <th className={classes.join(' ')}>{this.props.date.format('dd')}</th>
    }
});


let Week = React.createClass({
    render() {
        return <tr>{this.props.children}</tr>
    }
});


let Calendar = React.createClass({

    propTypes: {
        onSelect: React.PropTypes.func.isRequired
    },


    getDefaultProps() {
        return {
            date: moment()
        }
    },

    handleClick(event) {
        console.info('Calendar.handleClick', event);
        var date = event.target.getAttribute('data-date');
        this.props.onSelect(date);
    },


    render() {
        console.info('Calendar.render');
        let classes = ['Calendar', this.props.className].join(' ');

        let date = this.props.date;

        const startOfWeekIndex = 0;

        let current = date.clone().startOf('month').day(startOfWeekIndex);
        let end = date.clone().endOf('month').day(7);

        let elements = [];
        let days = [];
        let week = 1;
        let i = 1;

        let daysOfWeek = [];
        let day = current.clone();
        for (let j = 0; j < 7; j++) {
            let dayOfWeekKey = 'dayOfWeek' + j;
            daysOfWeek.push(<DayOfWeek key={dayOfWeekKey} date={day.clone()} />);
            day.add(1, 'days');
        }

        while (current.isBefore(end)) {
            days.push(<Day key={i++} actual={this.props.date} date={current.clone()} handleClick={this.handleClick} />);
            current.add(1, 'days');
            if (current.day() === 0) {
                let weekKey = 'week' + week++;
                elements.push(<Week key={weekKey}>{days}</Week>);
                days = [];
            }
        }

        return (
            <table className={classes}>
                <tr className="month"><th colSpan="7">{date.format('MMMM')}</th></tr>
                <Week key="daysOfWeek">{daysOfWeek}</Week>
                {elements}
            </table>
        );
    }
});


module.exports = Calendar;
