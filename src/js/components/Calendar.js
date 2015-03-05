import React from 'react';
import moment from 'moment';


let Day = React.createClass({
    render() {
        let classes = ['Day'];
        if (this.props.actual.isSame(this.props.date, 'day')) {
            classes.push('actual');
        }
        return <td className={classes.join(' ')}>{this.props.date.format('D')}</td>
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


    getInitialState() {
        return {
            date: moment()
        }
    },


    render() {
        console.info('Calendar.render');
        let classes = ['Calendar', this.props.className].join(' ');

        let date = this.state.date;

        const startOfWeekIndex = 0;

        let current = date.clone().startOf('month').day(startOfWeekIndex);
        let end = date.clone().endOf('month').day(7);

        console.info('',current, end);

        let elements = [];
        let days = [];
        let week = 1;
        let i = 1;

        let daysOfWeek = [];
        let day = current.clone();
        for (var j = 0; j < 7; j++) {
            daysOfWeek.push(<DayOfWeek date={day.clone()} />);
            day.add(1, 'days');
        }



        while (current.isBefore(end)) {

            console.info('', i, current.format('D'));

            days.push(<Day key={i++} actual={this.state.date} date={current.clone()} />);

            current.add(1, 'days');

            if (current.day() === 0) {
                let weekKey = 'week' + week++;
                elements.push(<Week key={weekKey}>{days}</Week>);
                days = [];
            }

            if (i > 50) break;
        }

        return (
            <table className={classes}>
                <tr className="month"><th colspan="7">{date.format('MMMM')}</th></tr>
                <Week key="daysOfWeek">{daysOfWeek}</Week>
                {elements}
            </table>
        );
    }
});


module.exports = Calendar;
