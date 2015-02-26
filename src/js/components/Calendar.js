var React = require('react');


let Calendar = React.createClass({

    render() {
        console.info('Calendar.render');
        let classes = ['Calendar', this.props.className].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});


module.exports = Calendar;

