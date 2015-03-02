var React = require("react");


var suggestions = [
    'chicken', 'duck', 'elephant', 'zebra', 'penguin', 'dog', 'cat', 'crocodile'
];

var handleEnter = function () {
    console.info('Actions.enter');
};
var handleEscape = function () {
    console.info('Actions.escape');
};
var handleArrowUp = function () {
    console.info('Actions.arrowUp');
};
var handleArrowRight = function () {
    console.info('Actions.arrowRight');
};
var handleArrowDown = function () {
    console.info('Actions.arrowDown');
};

var keys = {
    13: handleEnter,
    27: handleEscape,
    38: handleArrowUp,
    39: handleArrowRight,
    40: handleArrowDown
};

var SearchBox = React.createClass({


    getInitialState() {
        return {}
    },

    componentDidMount() {
        //this.refs.searchBox.getDOMNode().focus();
    },

    keyDown(e) {
        console.info('SearchBox.keyDown');

        var fn = keys[e.keyCode];
        if (fn) {
            fn(e);
        }
    },

    keyUp(e) {
        console.info('SearchBox.keyUp', e);
        if (!keys[e.keyCode]) {
            var inputtedTerm = this.refs.searchBox.getDOMNode().value;
            this.setState({
                inputtedTerm: inputtedTerm
            });
            this.props.inputted(inputtedTerm);
        }
    },

    render() {
        console.info('SearchBox.render');
        return <input className="SearchBox" ref="searchBox" onKeyDown={this.keyDown} onKeyUp={this.keyUp} />
    }
});


var DropDown = React.createClass({

    getInitialState() {
        return {}
    },


    render() {
        console.info('DropDown.render', this.props.suggestions, this.state);
        var entries = this.props.suggestions
            .map((suggestion) => {
                return <div>
                    <a href="#">{suggestion}</a>
                </div>;
            });

        var styles = {
            display: this.props.display ? 'block' : 'none'
        };

        return <div className="DropDown" style={styles}>{entries}</div>;
    }
});


var AutoSuggest = React.createClass({

    getInitialState() {
        return {
            suggestions: [],
            displayDropDown: false
        }
    },

    handleTerm(term) {
        console.info('AutoSuggest.handleTerm', term);
        this.setState({
            suggestions: suggestions,
            displayDropDown: true
        });
    },

    render() {
        console.info('AutoSuggest.render');
        return (
            <div className="AutoSuggest">
                <SearchBox inputted={this.handleTerm} />
                <DropDown key="dropdown" suggestions={this.state.suggestions} display={this.state.displayDropDown} />
            </div>
        );
    }
});


module.exports = AutoSuggest;
