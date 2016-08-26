var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the talk"
        },
        {
          id: 2,
          text: 'Be thoughtful'
        },
        {
          id: 3,
          text: 'Finish This'
        },
        {
          id: 4,
          text: 'COMMONNN!'
        }
      ]
    }
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;