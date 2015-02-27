var React = require('react');


var Tab = React.createClass({

    getInitialState() {
        return {
        }
    },

    componentDidMount() {
        console.info('Tab.componentDidMount');
        //if (this.props.selected) {
        //    this.props.parent.setState({
        //        selected: this
        //    });
        //}
    },

    handleClick() {
        console.info('Tab.handleClick');
        this.props.parent.selected(this);
    },

    render() {
        console.info('Tab.render');
        var classes = ['Tab'];
        if (this.props.selected) {
            classes.push('selected');
        }

        return <div className={classes.join(' ')} ref="Tab" onClick={this.handleClick}>{this.props.name}</div>
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
        console.info('TabPane.render', this.state);
        var classes = ['TabPane', this.props.orientation].join(' ');
        var paneClasses = ['TabPaneDisplay', this.props.className].join(' ');

        return (
            <div className={classes} ref="TabPane">
                <div className="tabs">
                    {this.props.children}
                </div>
                <div className={paneClasses}>
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