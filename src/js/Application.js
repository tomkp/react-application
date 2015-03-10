import React from 'react';
import Layout from './components/layout/Layout';
import Flex from './components/layout/Flex';
import Fixed from './components/layout/Fixed';
import Calendar from './components/calendar/Calendar';
import TabPane from './components/tab-pane/TabPane';
import Tab from './components/tab-pane/Tab';
import SplitPane from './components/split-pane/SplitPane';
import AutoSuggest from './components/auto-suggest/AutoSuggest';
import moment from 'moment';


let Application = React.createClass({


    autoSuggested(suggestion) {
        console.info('Application.autoSuggested', suggestion);
    },

    dateSelected(date) {
        console.info('Application.dateSelected', date);
    },

    render: function () {
        return (
                <Layout type="rows">

                    <Fixed className="header">

                        <Layout type="columns">
                            <Fixed className="logo">∞</Fixed>
                            <Flex></Flex>
                            <Fixed>
                                <AutoSuggest onSuggestion={this.autoSuggested} />
                            </Fixed>
                        </Layout>

                    </Fixed>

                    <Flex className="xxx">

                        <Layout type="columns">

                            <Fixed className="Sidebar">
                                <Layout type="rows">
                                    <Fixed>
                                        <ul>
                                            <li>Movies</li>
                                            <li>News</li>
                                            <li>Music</li>
                                        </ul>
                                    </Fixed>
                                    <Flex></Flex>
                                    <Fixed>
                                        <ul>
                                            <li>Settings</li>
                                            <li>Logout</li>
                                        </ul>
                                    </Fixed>
                                </Layout>
                            </Fixed>

                            <Flex className="content">
                                <SplitPane orientation="horizontal" minSize="420">

                                    <TabPane orientation="vertical" className="my-tabs">
                                        <Tab id="A" name="A">some stuff</Tab>
                                        <Tab id="B" name="B" active="true">whatevs</Tab>
                                        <Tab id="C" name="C">innit</Tab>
                                    </TabPane>

                                    <SplitPane orientation="vertical" minSize="10">
                                        <div className="top1">
                                            Bacon ipsum dolor amet pancetta filet mignon short ribs corned beef.
                                        </div>

                                        <Calendar date={moment().add(2, 'd')} onSelect={this.dateSelected} />

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

