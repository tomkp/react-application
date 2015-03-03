var React = require("react");


var suggestions = [
    'chicken', 'duck', 'elephant', 'zebra', 'penguin', 'dog', 'cat', 'crocodile'
];


var SearchBox = React.createClass({


    getInitialState() {
        return {
            value: ''
        }
    },

    componentDidMount() {
        console.info('SearchBox.componentDidMount');
        //this.refs.searchBox.getDOMNode().focus();
    },

    keyDown(event) {
        console.info('SearchBox.keyDown');
        var keys = [13,27,38,39,40];
        if (keys.indexOf(event.keyCode) !== -1) {
            this.props.handleSpecial(event.keyCode);
        }
    },

    keyUp(event) {
        console.info('SearchBox.keyUp', event, event.keyCode);
        //var keys = [13,27,38,39,40];
        //if (keys.indexOf(event.keyCode) === -1) {
        //    var inputtedTerm = this.refs.searchBox.getDOMNode().value;
        //    //this.setState({
        //    //    inputtedTerm: inputtedTerm
        //    //});
        //    this.props.handleTerm(inputtedTerm);
        //} else {
        //    this.props.handleSpecial(event.keyCode);
        //}
    },

    handleChange(event) {
        console.info('SearchBox.handleChange', event, event.keyCode);

        this.setState({value: event.target.value});
        var keys = [13,27,38,39,40];
        if (keys.indexOf(event.keyCode) === -1) {
            var inputtedTerm = this.refs.searchBox.getDOMNode().value;
            //this.setState({
            //    inputtedTerm: inputtedTerm
            //});
            this.props.handleTerm(inputtedTerm);
        } else {
            //this.props.handleSpecial(event.keyCode);
        }
    },

    onInput(event) {
        console.info('SearchBox.onInput', event, event.keyCode);

    },


    render() {
        console.info('SearchBox.render', this.props.displayTerm);
        return <input ref="searchBox"
            className="SearchBox"
            onKeyDown={this.keyDown}
            onKeyUp={this.keyUp}
            onChange={this.handleChange}
            onInput={this.onInput}
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
        var term;

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

        term = index === -1?this.state.term:this.state.suggestions[index];
        console.info('term', term, index);
        this.setState({
            index: index,
            term: term,
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
                    displayTerm={this.state.term}
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
