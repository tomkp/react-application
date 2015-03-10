import React from 'react/addons';
import Tab from './Tab';
import prefix from './Prefix';


let TabPane = React.createClass({

    propTypes: {
        orientation: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            orientation: 'vertical'
        }
    },

    getInitialState() {
        console.info('TabPane.getInitialState');
        let selected = this.props.children[0];
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
        console.info('TabPane.selectTab', tab.props.name);
        this.setState({
            selectedTab: tab
        });
    },


    render() {
        console.info('TabPane.render');

        let classes = ['TabPane', this.props.orientation].join(' ');
        let styles;
        if (this.props.orientation === 'vertical') {
            styles = prefix({
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                height: '100%',
                position: 'absolute',
                left: 0,
                right: 0
            });
        } else {
            styles = prefix({
                display: 'flex',
                flex: 1,
                position: 'relative',
                flexDirection: 'column',
                height: '100%',
                minHeight: '100%'
            });
        }


        let paneClasses = ['TabPaneDisplay', this.props.className].join(' ');
        let paneStyles = prefix({
            flex: 1
        });


        let selectedId = this.state.selectedTab.props.id;
        let elements = this.props.children.map((child) => {
            let active = child.props.id === selectedId;
            return React.addons.cloneWithProps(child, {
                active: active,
                selectTab: this.selectTab,
                id: child.props.id,
                key: child.props.id
            });
        });

        return (
            <div className={classes} styles={styles} ref="TabPane">
                <div className="tabs">
                    {elements}
                </div>
                <div className={paneClasses} styles={paneStyles}>
                    {this.state.selectedTab.props.children}
                </div>
            </div>
        )
    }
});



module.exports = TabPane;