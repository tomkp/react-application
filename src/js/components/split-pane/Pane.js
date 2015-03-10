import React from 'react';
import prefix from '../prefix/Prefix';


let Pane = React.createClass({

    getInitialState() {
        return {
        }
    },

    render() {
        let classes = ['Pane'];
        let styles = {
            flex: 1,
            outline: 'none',
            overflow: 'auto'
        };
        if (this.state.size) {
            if (this.props.orientation === 'horizontal') {
                styles = {
                    width: this.state.size
                }
            } else {
                styles = {
                    height: this.state.size
                }
            }
            styles['flex'] = 'none';
        }
        classes = classes.join(' ');
        return <div className={classes} style={prefix(styles)}>{this.props.children}</div>;
    }
});


module.exports = Pane;