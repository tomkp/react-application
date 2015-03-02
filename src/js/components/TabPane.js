var React = require('react/addons');

var Tab = React.createClass({


    handleClick() {
        console.info('Tab.handleClick');
        this.props.selectTab(this);
    },

    render() {
        console.info('Tab.render');
        var classes = ['Tab'];
        if (this.props.active) {
            classes.push('active');
        }
        return <div className={classes.join(' ')} onClick={this.handleClick}>{this.props.name}</div>
    }
});





var TabPane = React.createClass({

    getInitialState() {
        console.info('TabPane.getInitialState');
        var selected = this.props.children[0];
        this.props.children.forEach((child) => {
            child.props.parent = this;
            if (child.props.selected) {
                selected = child;
            }
        });
        return {
            selectedTab: selected
        }
    },


    selectTab(tab) {
        console.info('TabPane.selected', tab);
        this.setState({
            selectedTab: tab
        });
    },


    render() {
        console.info('TabPane.render');
        var classes = ['TabPane', this.props.orientation].join(' ');
        var paneClasses = ['TabPaneDisplay', this.props.className].join(' ');
        var selectedid = this.state.selectedTab.props.id;
        var elements = this.props.children.map((child) => {
            var active = child.props.id === selectedid;
            return React.addons.cloneWithProps(child, {
                active: active,
                selectTab: this.selectTab,
                id: child.props.id
            });
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