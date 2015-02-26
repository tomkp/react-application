var React = require('react');



var Tab = React.createClass({

    getInitialState() {
        return {
        }
    },

    handleClick() {

    },

    render() {
        console.info('Tab.render');
        var classes = ['Tab'].join(' ');

        return <div className={classes} ref="Tab" onClick={this.handleClick}>{this.props.name}</div>
    }
});



module.exports = Tab;