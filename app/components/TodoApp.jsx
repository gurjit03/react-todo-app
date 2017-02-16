var React = require("react");
var TodoList = require("TodoList")
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState : function() {
    return {
      showCompleted : false,
      searchText : '',
      todos : [
        {
          id : uuid(),
          text : "First task in the list"
        },
        {
          id : uuid(),
          text : "Second task in the list"
        },
        {
          id : uuid(),
          text : "get me a pen"
        },
        {
          id : uuid(),
          text : "hello this is 4th one"
        },
      ]
    }
  },
  handleAddTodo : function(text) {
    this.setState({
      todos : [
        ...this.state.todos,
      {
        id : uuid(),
        text : text
      }
      ]
    })
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
