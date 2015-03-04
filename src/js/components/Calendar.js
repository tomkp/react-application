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
        let daysInMonth = date.daysInMonth();

        let current = date.clone().startOf('month').day(0);
        let end = date.clone().endOf('month').day(7);

        console.info('',current, end);

        let elements = [];
        let days = [];
        let week = 1;
        let i = 1;

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
                <tr className="days"><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>
                {elements}
            </table>
        );
    }
});


module.exports = Calendar;
