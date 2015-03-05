jest.dontMock('../Calendar');


describe('Calendar', function() {

    it('renders the Calendar', function() {

        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Calendar = require('../Calendar');

        var calendar = TestUtils.renderIntoDocument(
            <Calendar />
        );

    });


});