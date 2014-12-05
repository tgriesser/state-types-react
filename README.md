## state-types-react

Allows for validating state in the same way as you would 
with `propTypes` or `contextTypes`.

### Use:

Require this module **before** React, at the top of your application.

```jsx
// Require at the very top level.
require('state-types-react');

// ... rest of your code here

var Component = React.createClass({

  stateTypes: {
    account: React.PropTypes.instanceOf(Account).isRequired
  },

  getInitialState: function() {
    account: getAccount()
  },

  render: function() {
    return <Account name={this.state.account.name} />
  }

});
```

### License

MIT