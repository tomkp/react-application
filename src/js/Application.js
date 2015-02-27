var React = require('react');
var Layout = require('./components/Layout');
var Flex = require('./components/Flex');
var Fixed = require('./components/Fixed');
var TabPane = require('./components/TabPane').TabPane;
var Tab = require('./components/TabPane').Tab;
var SplitPane = require('./components/SplitPane');
var AutoSuggest = require('./components/AutoSuggest');


var Application = React.createClass({

    render: function () {
        return (
                <Layout type="Rows">
                    <Fixed className="Header">
                        <Layout type="Columns">
                            <Fixed className="Logo">∞</Fixed>
                            <Flex></Flex>
                            <Fixed>
                                <AutoSuggest />
                            </Fixed>
                        </Layout>
                    </Fixed>
                    <Flex className="xxx">
                        <Layout type="Columns">
                            <Fixed className="Sidebar">
                                <Layout type="Rows">
                                    <Fixed></Fixed>
                                    <Flex></Flex>
                                    <Fixed></Fixed>
                                </Layout>
                            </Fixed>
                            <Flex className="Content">
                                <SplitPane orientation="horizontal" minSize="200">
                                    <div className="side1">
                                        <TabPane orientation="horizontal" className="my-tabs">
                                            <Tab name="A" selected="true">some stuff</Tab>
                                            <Tab name="B">whatevs</Tab>
                                            <Tab name="C">innit</Tab>
                                        </TabPane>
                                    </div>
                                    <SplitPane orientation="vertical" minSize="10">
                                        <div className="top1">
                                            Bacon ipsum dolor amet pancetta filet mignon short ribs corned beef.
                                        </div>
                                        <div className="bottom1">
                                            hello
                                        </div>
                                    </SplitPane>
                                </SplitPane>
                            </Flex>
                        </Layout>
                    </Flex>
                </Layout>
        )
    }
});


React.render(<Application />, document.body);

