var React = require("react");
var uuid = require('node-uuid');
var moment = require('moment');

var AddTodo = require('AddTodo');
var TodoList = require("TodoList")
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState : function() {
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
          todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        completed : false,
        createdAt : moment().unix(),
        completeAt : undefined
      },
      ...this.state.todos
      ]
    })
  },
  handleSearch : function(searchText,showCompleted) {
    console.log('called......')
    this.setState({
      showCompleted : showCompleted,
      searchText : searchText
    })
  },
  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos,searchText,showCompleted);

    return (
      <div className="todo-app">
      <h1 className="page-title">Todo App</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="todo-app-container">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
      </div>
    )
  }
})

module.exports = TodoApp;
