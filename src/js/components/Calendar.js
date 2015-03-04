import React from 'react';
import moment from 'moment';


let Calendar = React.createClass({

    render() {
        console.info('Calendar.render', moment);
        let classes = ['Calendar', this.props.className].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});


module.exports = Calendar;

