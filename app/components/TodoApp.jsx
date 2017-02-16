var React = require("react");
var TodoList = require("TodoList")
var TodoApp = React.createClass({
  getInitialState : function() {
    return {
      todos : [
        {
          id : 1,
          text : "First task in the list"
        },
        {
          id : 2,
          text : "Second task in the list"
        },
        {
          id : 3,
          text : "get me a pen"
        },
        {
          id : 4,
          text : "hello this is 4th one"
        },
      ]
    }
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div className="todo-app-wrapper">
        <TodoList todos={todos} />
      </div>
    )
  }
})

module.exports = TodoApp;
