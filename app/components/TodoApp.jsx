var React = require("react");
var uuid = require('node-uuid');

var AddTodo = require('AddTodo');
var TodoList = require("TodoList")
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState : function() {
    debugger;
    const payload = {
      showCompleted : false,
      searchText : '',
      todos : []
    }
    console.log(payload);
    return payload;
  },
  componentDidMount: function() {
    this.setState({
      todos : TodoAPI.getTodos()
    })
  },
  componentWillUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle : function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
    })
    this.setState({
      todos : updatedTodos
    })
  },
  handleAddTodo : function(text) {
    this.setState({
      todos : [
      {
        id : uuid(),
        text : text,
        completed : false
      },
      ...this.state.todos
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
})

module.exports = TodoApp;
