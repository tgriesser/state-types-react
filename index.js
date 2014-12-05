
// Validate state types as you would props or context with React, but only in development.

if ('production' !== process.env.NODE_ENV) {
  var BaseProto = require('react/lib/ReactCompositeComponent').Base.prototype;
  var ReactPropTypeLocationNames = require('react/lib/ReactPropTypeLocationNames');
  ReactPropTypeLocationNames.state = 'state';
  var renderValidated = BaseProto._renderValidatedComponent;
  BaseProto._renderValidatedComponent = function() {
    if (this.stateTypes) {
      this._checkPropTypes(this.stateTypes, this.state, 'state');
    }
    return renderValidated.apply(this, arguments);
  };
}