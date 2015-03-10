import React from 'react/addons';
import prefix from '../prefix/Prefix';


let Layout = React.createClass({

    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            type: 'columns'
        }
    },

    render() {
        console.info('Layout.render');
        let classes = ['Layout'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let styles;

        if (this.props.type === 'rows') {
            styles = {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',

                position: 'relative',
                height: '100%',
                minHeight: '100%'
            };
        } else {
            styles = {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',

                height: '100%',
                position: 'absolute',
                left: 0,
                right: 0
            };
        }

        let type = this.props.type;
        let index = 0;
        let elements = this.props.children.map((child) => {
            return React.addons.cloneWithProps(child, {
                type: type,
                key: index++
            });
        });

        return <div className={classes.join(' ')} style={prefix(styles)}>{elements}</div>;
    }
});





module.exports = Layout;

/*


 .Layout {
     display: flex;
     flex: 1;
     position: relative;
 }

 // vertically stacked
 .rows {
     flex-direction: column;
     height: 100%;
     min-height: 100%;
 }

 // left to right
 .columns {
     flex-direction: row;
     height: 100%;
     position: absolute;
     left: 0;
     right: 0;
 }

 .rows > .Fixed {
    width: 100%;
 }

 .columns > .Fixed {
     height: 100%;
 }

 .rows > .Flex {
 }

 .columns > .Flex {
    height: 100%;
 }

 // flexible content area
 .Flex {
    flex: 1;
 }

 */