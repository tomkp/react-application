jest.dontMock('../Sidebar');


describe('Sidebar', function() {

    it('renders', function() {

        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Sidebar = require('../Sidebar');


        var sidebar = TestUtils.renderIntoDocument(
            <Sidebar />
        );


    });


});