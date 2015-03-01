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
                                        <TabPane orientation="vertical" className="my-tabs">
                                            <Tab key="A" name="A">some stuff</Tab>
                                            <Tab key="B" name="B" active="true">whatevs</Tab>
                                            <Tab key="C" name="C">innit</Tab>
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

