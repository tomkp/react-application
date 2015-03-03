import React from 'react';
import Layout from './components/Layout'; 
import Flex from './components/Flex'; 
import Fixed from './components/Fixed'; 
import {TabPane, Tab} from './components/TabPane';
import SplitPane from './components/SplitPane'; 
import AutoSuggest from './components/AutoSuggest'; 


let Application = React.createClass({

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
                                            <Tab key="A" id="A" name="A">some stuff</Tab>
                                            <Tab key="B" id="B" name="B" active="true">whatevs</Tab>
                                            <Tab key="C" id="C" name="C">innit</Tab>
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

