var React = require('react');


var Tab = React.createClass({

    getInitialState() {
        return {
        }
    },

    handleClick() {
        console.info('Tab.handleClick');
        this.props.parent.selected(this);
    },

    render() {
        console.info('Tab.render');
        var classes = ['Tab'].join(' ');

        return <div className={classes} ref="Tab" onClick={this.handleClick}>{this.props.name}</div>
    }
});




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
                <div className="tabs">
                    {this.props.children}
                </div>
                <div className="tab-display">
                    {this.state.selected.props.children}
                </div>
            </div>
        )
    }
});



module.exports = {
    TabPane: TabPane,
    Tab: Tab
};