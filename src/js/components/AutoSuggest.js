var React = require("react");



var suggestions = [
    'chicken', 'duck', 'elephant', 'zebra', 'penguin', 'dog', 'cat', 'crocodile'
];



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



var SearchBox = React.createClass({

    getInitialState() {
        return {

        }
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
        return {
        }
    },


    render() {
        console.info('DropDown.render', this.props.suggestions, this.state);
        var entries = this.props.suggestions
            .map((suggestion) => {
                return <div><a href="#">{suggestion}</a></div>;
            });

        var styles = {
            display: this.props.display?'block':'none'
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
        return  (<div className="AutoSuggest">
                    <SearchBox inputted={this.handleTerm} />
                    <DropDown key="dropdown" suggestions={this.state.suggestions} display={this.state.displayDropDown} />
                </div>)
    }
});


module.exports = AutoSuggest;
