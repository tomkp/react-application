var React = require("react");



var Actions = {
    enter() {
        console.info('Actions.enter');
    },
    escape() {
        console.info('Actions.escape');
    },
    arrowUp() {
        console.info('Actions.arrowUp');
    },
    arrowRight() {
        console.info('Actions.arrowRight');
    },
    arrowDown() {
        console.info('Actions.arrowDown');
    }
};

var keys = {
    13: Actions.enter,
    27: Actions.escape,
    38: Actions.arrowUp,
    39: Actions.arrowRight,
    40: Actions.arrowDown
};


var suggestions = [
    'chicken', 'duck', 'elephant', 'zebra', 'penguin', 'dog', 'cat', 'crocodile'
];




var SearchBox = React.createClass({

    getInitialState() {
        return {

        }
    },

    componentDidMount() {
        this.refs.searchBox.getDOMNode().focus();
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
            // store inputted value
            //inputtedTerm = inputField.attr("value");
            //triggerDropDown();
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
        return {
             displayed: false
        }
    },


    render() {
        console.info('DropDown.render', this.props.suggestions);
        var entries = this.props.suggestions
            .map((suggestion) => {
                return <div>{suggestion}</div>;
            });
        return <div className="DropDown">{entries}</div>;
    }
});

var AutoSuggest = React.createClass({

    getInitialState() {
        return {
            suggestions: []
        }
    },

    handleTerm(term) {
        console.info('AutoSuggest.handleTerm', term);
        this.setState({
            suggestions: suggestions
        });
    },

    render() {
        console.info('AutoSuggest.render');
        return  (<div className="AutoSuggest">
                    <SearchBox inputted={this.handleTerm} />
                    <DropDown suggestions={this.state.suggestions} />
                </div>)
    }
});


module.exports = AutoSuggest;
