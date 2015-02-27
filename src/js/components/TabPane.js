var React = require('react');


var Tab = React.createClass({

    getInitialState() {
        console.info('Tab.getInitialState');
        return {
            selected: false
        }
    },

    componentDidMount() {
        console.info('Tab.componentDidMount');
        if (this.props.selected) {
            this.setState({
                selected: true
            });
        }
    },

    handleClick() {
        console.info('Tab.handleClick');
        this.props.parent.selected(this);
        this.setState({
            selected: true
        })
    },

    deselect() {
        this.setState({
            selected: false
        });
    },

    render() {
        console.info('Tab.render', this.state);
        var classes = ['Tab'];
        if (this.state.selected) {
            classes.push('selected');
        }

        return <div className={classes.join(' ')} ref="Tab" onClick={this.handleClick}>{this.props.name}</div>
    }
});





var TabPane = React.createClass({

    getInitialState() {
        console.info('TabPane.getInitialState');
        var selected = this.props.children[0];
        this.props.children.forEach((child) => {
            console.info('child', child);
            child.props.parent = this;
            if (child.props.selected) {
                selected = child;
            }
        });
        return {
            selectedTab: selected
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
            selectedTab: tab
        });

        this.props.children.forEach((child, index) => {
            console.info('child', child, '-', tab, '-', index);
            if (child !== tab) {
                //child.setState({selected: false});
                //child.deselect(); //setState({selected: false});
            }
        });
    },

    render() {
        console.info('TabPane.render', this.state);
        var classes = ['TabPane', this.props.orientation].join(' ');
        var paneClasses = ['TabPaneDisplay', this.props.className].join(' ');

        var elements = this.props.children.map((child) => {
            console.info('child', child);
            //return <Tab name={child.props.name}>child.props.children</Tab>;
            return child;
        });

        return (
            <div className={classes} ref="TabPane">
                <div className="tabs">
                    {elements}
                </div>
                <div className={paneClasses}>
                    {this.state.selectedTab.props.children}
                </div>
            </div>
        )
    }
});



module.exports = {
    TabPane: TabPane,
    Tab: Tab
};