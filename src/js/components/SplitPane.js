var React = require('react');


var Resizer = React.createClass({

    handleDown() {
        this.props.down();
    },

    render() {
        return <span className="Resizer" onMouseDown={this.handleDown} />
    }
});


var Pane = React.createClass({

    getInitialState() {
        return {
        }
    },

    render() {
        var classes = ['Pane'];
        var styles = {};
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
            classes.push('noflex');
        }
        classes = classes.join(' ');
        return <div className={classes} style={styles}>{this.props.children}</div>;
    }
});


var SplitPane = React.createClass({

    getInitialState() {
        return {
            active: false
        }
    },

    componentDidMount() {
        document.addEventListener('mouseup', this.up);
        document.addEventListener('mousemove', this.move);
    },

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.up);
        document.removeEventListener('mousemove', this.move);
    },


    down() {
        var position = this.props.orientation === 'horizontal' ? event.clientX : event.clientY;
        this.setState({
            active: true,
            position: position
        });
    },

    move() {
        if (this.state.active) {
            var ref = this.refs.pane1;
            if (ref) {
                var node = ref.getDOMNode();
                if (window.getComputedStyle) {
                    var styles = window.getComputedStyle(node);
                    var width = styles.width.replace('px', '');
                    var height = styles.height.replace('px', '');
                    var current = this.props.orientation === 'horizontal' ? event.clientX : event.clientY;
                    var size = this.props.orientation === 'horizontal' ? width : height;
                    var position = this.state.position;
                    var newSize = size - (position - current);
                    this.setState({
                        position: current
                    });
                    if (newSize >= this.props.minSize) {
                        ref.setState({
                            size: newSize
                        });
                    }
                }
            }
        }
    },

    up() {
        this.setState({
            active: false
        });
    },

    render() {
        var elements = [];
        var children = this.props.children;
        var child0 = children[0];
        var child1 = children[1];
        elements.push(<Pane ref="pane1" key="pane1" orientation={this.props.orientation}>{child0}</Pane>);
        elements.push(<Resizer ref="resizer" key="resizer" down={this.down} />);
        elements.push(<Pane ref="pane2" key="pane2">{child1}</Pane>);

        var classes = ['SplitPane', this.props.orientation].join(' ');

        return <div className={classes} ref="splitPane">{elements}</div>
    }
});


module.exports = SplitPane;