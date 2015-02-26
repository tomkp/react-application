var React = require('react');


var Layout = React.createClass({

    render() {
        console.info('Layout.render');
        var classes = ['Layout', this.props.type].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});


module.exports = Layout;
