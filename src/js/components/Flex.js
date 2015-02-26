var React = require('react');


var Flex = React.createClass({

    render() {
        console.info('Flex.render');
        var classes = ['Flex', this.props.className].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});



module.exports = Flex;
