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
                            <Fixed className="Logo">MDMA</Fixed>
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
                                    <Fixed>Top</Fixed>
                                    <Flex></Flex>
                                    <Fixed>Bottom</Fixed>
                                </Layout>
                            </Fixed>
                            <Flex className="Content">
                                <SplitPane orientation="horizontal" minSize="200">
                                    <div className="side1">
                                        <TabPane orientation="horizontal">
                                            <Tab name="A" selected="true">some stuff</Tab>
                                            <Tab name="B">whatevs</Tab>
                                            <Tab name="C">innit</Tab>
                                        </TabPane>
                                    </div>
                                    <SplitPane orientation="vertical" minSize="10">
                                        <div className="top1">
                                            Bacon ipsum dolor amet pancetta filet mignon short ribs corned beef. Shankle salami ground round cow, meatloaf biltong leberkas. Chuck picanha short loin short ribs bresaola, tenderloin prosciutto pork chop kevin meatloaf bacon drumstick boudin cupim ribeye. Rump tail corned beef meatloaf strip steak turducken beef ribs pastrami. Hamburger andouille sausage, pork loin ham hock doner turkey. Pork ball tip short ribs short loin, pork loin landjaeger corned beef.

                                            Pancetta prosciutto alcatra, pork frankfurter brisket t-bone sirloin kielbasa kevin landjaeger pig shoulder spare ribs tri-tip. Pastrami sausage turkey capicola chuck. Chuck leberkas chicken, drumstick sausage pork loin ham hock biltong bacon. Strip steak picanha fatback, bresaola spare ribs bacon ball tip cupim pork belly turkey shank corned beef beef swine. Spare ribs andouille sausage picanha short ribs leberkas pancetta ham hock ground round jerky capicola flank porchetta kevin. Sirloin prosciutto bresaola ground round chicken tri-tip chuck pastrami.
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

