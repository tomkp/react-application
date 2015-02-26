var React = require('react');

var Tab = require('./Tab');




var TabPane = React.createClass({

    getInitialState() {
        return {
        }
    },

    componentDidMount() {
    },

    componentWillUnmount() {
    },


    render() {
        console.info('TabPane.render');
        var classes = ['TabPane', this.props.orientation].join(' ');
        var selected;
        this.props.children.forEach((child) => {
            console.info('child', child);
            if (child.props.selected) {
                selected = child;
            }
        });

        return (
            <div className={classes} ref="TabPane">
                {this.props.children}
                <div>
                    {selected.props.children}
                </div>
            </div>
        )
    }
});



module.exports = TabPane;