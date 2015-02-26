var React = require('react');

var Tab = require('./Tab');



var TabPane = React.createClass({

    getInitialState() {
        console.info('TabPane.getInitialState');
        var selected;
        this.props.children.forEach((child) => {
            console.info('child', child);
            child.props.parent = this;
            if (child.props.selected) {
                selected = child;
            }
        });
        return {
            selected: selected
        }
    },

    componentDidMount() {
        console.info('TabPane.componentDidMount');

    },

    componentWillUnmount() {
    },

    selected(tab) {
        console.info('TabPane.selected', tab);
        this.setState({
            selected: tab
        });
    },

    render() {
        console.info('TabPane.render');
        var classes = ['TabPane', this.props.orientation].join(' ');

        return (
            <div className={classes} ref="TabPane">
                {this.props.children}
                <div>
                    {this.state.selected.props.children}
                </div>
            </div>
        )
    }
});



module.exports = TabPane;