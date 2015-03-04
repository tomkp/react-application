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
                <Layout type="rows">
                    <Fixed className="header">
                        <Layout type="columns">
                            <Fixed className="logo">∞</Fixed>
                            <Flex></Flex>
                            <Fixed>
                                <AutoSuggest />
                            </Fixed>
                        </Layout>
                    </Fixed>
                    <Flex className="xxx">
                        <Layout type="columns">
                            <Fixed className="Sidebar">
                                <Layout type="rows">
                                    <Fixed>«</Fixed>
                                    <Flex></Flex>
                                    <Fixed>»</Fixed>
                                </Layout>
                            </Fixed>
                            <Flex className="content">
                                <SplitPane orientation="horizontal" minSize="200">
                                    <div className="side1">
                                        <TabPane orientation="vertical" className="my-tabs">
                                            <Tab id="A" name="A">some stuff</Tab>
                                            <Tab id="B" name="B" active="true">whatevs</Tab>
                                            <Tab id="C" name="C">innit</Tab>
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

