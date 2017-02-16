var React = require("react");
var TodoList = require("TodoList")
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState : function() {
    return {
      showCompleted : false,
      searchText : '',
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
  handleAddTodo : function(text) {
    alert("new todo added with text "+text)
  },
  handleSearch : function(searchText,showCompleted) {
    this.setState({
      showCompleted : showCompleted,
      searchText : searchText
    })
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div className="todo-app-wrapper">
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
})

module.exports = TodoApp;
