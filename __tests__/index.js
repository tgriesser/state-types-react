jest.dontMock('../index.js');

require('../index');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('state-types-react', function () {
  var warn;
  beforeEach(function () {
    warn = console.warn;
    console.warn = jest.genMockFunction();
  });

  afterEach(function () {
    console.warn = warn;
  });

  it('should validate a stateTypes property if provided', function () {
    
    /** @pragma React.DOM */

    var Component = React.createClass({

      stateTypes: {
        person: React.PropTypes.string.isRequired
      },

      getInitialState: function() {
        return {
          person: 'Tim'
        };
      },

      render: function() {
        return null;
      }

    });

    // Render a checkbox with label in the document
    var component = TestUtils.renderIntoDocument(<Component />);

    expect(console.warn.mock.calls.length).toBe(0);

    component.setState({person: 0});

    expect(console.warn.mock.calls.length).toBe(1);
    expect(console.warn.mock.calls[0][0]).toBe('Warning: Invalid state `person` of type `number` supplied to `Component`, expected `string`.');

  });

});