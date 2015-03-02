var React = require("react");


var suggestions = [
    'chicken', 'duck', 'elephant', 'zebra', 'penguin', 'dog', 'cat', 'crocodile'
];


var SearchBox = React.createClass({


    getInitialState() {
        return {
        }
    },

    componentDidMount() {
        console.info('SearchBox.componentDidMount');
        //this.refs.searchBox.getDOMNode().focus();
    },

    keyDown(e) {
        console.info('SearchBox.keyDown');
        var keys = [13,27,38,39,40];
        if (keys.indexOf(e.keyCode) !== -1) {
            //this.props.special(e.keyCode);
        }
    },

    keyUp(e) {
        console.info('SearchBox.keyUp', e, e.keyCode);
        var keys = [13,27,38,39,40];
        if (keys.indexOf(e.keyCode) === -1) {
            var inputtedTerm = this.refs.searchBox.getDOMNode().value;
            this.setState({
                inputtedTerm: inputtedTerm
            });
            this.props.handleTerm(inputtedTerm);
        } else {
            this.props.handleSpecial(e.keyCode);
        }
    },

    render() {
        console.info('SearchBox.render');
        return <input ref="searchBox"
            className="SearchBox"
            onKeyDown={this.keyDown}
            onKeyUp={this.keyUp}
            value={this.props.displayTerm} />
    }
});


var DropDown = React.createClass({


    render() {
        console.info('DropDown.render', this.props.suggestions);
        var index = this.props.index;
        var entries = this.props.suggestions
            .map((suggestion, i) => {
                return (
                    <div className={i === index?'selected':''}>
                        <a href="#">{suggestion}</a>
                    </div>
                );
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
            displayDropDown: false,
            index: -1
        }
    },

    handleTerm(term) {
        console.info('AutoSuggest.handleTerm', term);
        this.setState({
            term: term,
            suggestions: suggestions,
            displayDropDown: true
        });
    },


    handleSpecial(code) {
        console.info('AutoSuggest.handleSpecial');
        var length = this.state.suggestions.length;
        var index = this.state.index;
        var displayDropDown = true;
        var displayTerm;

        if (code === 13) {
            // enter

        } else if (code === 27) {
            // esc
            index = -1;
            displayDropDown = false;
        } else if (code === 38) {
            // up
            if (index === -1) {
                index = length - 1;
            } else {
                index--;
            }
        } else if (code === 39) {
            // right
        } else if (code === 40) {
            // down
            if (index === length - 1) {
                index = -1;
            } else {
                index++;
            }
        }

        displayTerm = index === -1?this.state.term:this.state.suggestions[index];
        console.info('displayTerm', displayTerm, index);
        this.setState({
            index: index,
            displayTerm: displayTerm,
            displayDropDown: displayDropDown
        })
    },


    render() {
        console.info('AutoSuggest.render');
        return (
            <div className="AutoSuggest">
                <SearchBox
                    handleTerm={this.handleTerm}
                    handleSpecial={this.handleSpecial}
                    displayTerm={this.state.displayTerm}
                />
                <DropDown key="dropdown"
                    suggestions={this.state.suggestions}
                    display={this.state.displayDropDown}
                    index={this.state.index}
                />
            </div>
        );
    }
});


module.exports = AutoSuggest;
